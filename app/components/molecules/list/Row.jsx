import { v } from "@/app/styles/variables";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { AppDate } from "@/app/lib/AppDate";
import { Icon } from "../../atoms/icon/icon";

export const Row = memo(function Row(props) {
  const { item, isFadingOut, onDelete, onToggleCompleted, onUpdateItem } =
    props;

  const [isEditingName, setIsEditingName] = useState(false);
  const [isEditingDeadline, setIsEditingDeadline] = useState(false);
  const [draftName, setDraftName] = useState(item.name);
  const [draftDeadline, setDraftDeadline] = useState(item.deadline.toString());
  const nameInputRef = useRef(null);
  const deadlineInputRef = useRef(null);

  useEffect(() => {
    if (isEditingName) {
      nameInputRef.current?.focus();
      nameInputRef.current?.select();
    }
  }, [isEditingName]);

  useEffect(() => {
    if (isEditingDeadline) {
      deadlineInputRef.current?.focus();
    }
  }, [isEditingDeadline]);

  const startEditName = useCallback(() => {
    if (isEditingName || isEditingDeadline) return;
    setDraftName(item.name);
    setIsEditingName(true);
  }, [item.name, isEditingName, isEditingDeadline]);

  const startEditDeadline = useCallback(() => {
    if (isEditingName || isEditingDeadline) return;
    setDraftDeadline(item.deadline.toString());
    setIsEditingDeadline(true);
  }, [item.deadline, isEditingName, isEditingDeadline]);

  const commitName = useCallback(() => {
    const nextName = draftName.trim();
    if (!nextName) {
      setDraftName(item.name);
      setIsEditingName(false);
      return;
    }
    if (nextName !== item.name) {
      onUpdateItem(item.id, { name: nextName });
      setDraftName(nextName);
    }
    setIsEditingName(false);
  }, [draftName, item.id, item.name, onUpdateItem]);

  const commitDeadline = useCallback(() => {
    const parsed = AppDate.parse(draftDeadline);
    if (!parsed) {
      setDraftDeadline(item.deadline.toString());
      setIsEditingDeadline(false);
      return;
    }

    const next = parsed.toString();
    const prev = item.deadline.toString();
    if (next !== prev) {
      onUpdateItem(item.id, { deadline: parsed });
      setDraftDeadline(next);
    }

    setIsEditingDeadline(false);
  }, [draftDeadline, item.deadline, item.id, onUpdateItem]);

  const guardSwitchFromName = useCallback(
    (e) => {
      if (!isEditingName) return;
      e.preventDefault();
      e.stopPropagation();
      commitName();
    },
    [isEditingName, commitName],
  );

  const guardSwitchFromDeadline = useCallback(
    (e) => {
      if (!isEditingDeadline) return;
      e.preventDefault();
      e.stopPropagation();
      commitDeadline();
    },
    [isEditingDeadline, commitDeadline],
  );

  return (
    <StyledItem $isFadingOut={isFadingOut}>
      <StyledItemColCheck>
        <Icon
          type="check"
          itemId={item.id}
          checked={item.isCompleted}
          onChange={onToggleCompleted}
        />
      </StyledItemColCheck>

      <StyledItemColName
        onClick={startEditName}
        onMouseDownCapture={guardSwitchFromDeadline}
      >
        {isEditingName ? (
          <input
            ref={nameInputRef}
            type="text"
            value={draftName}
            onChange={(e) => setDraftName(e.target.value)}
            onBlur={commitName}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          item.name
        )}
      </StyledItemColName>

      <StyledItemColDeadline
        onClick={startEditDeadline}
        onMouseDownCapture={guardSwitchFromName}
      >
        {isEditingDeadline ? (
          <input
            ref={deadlineInputRef}
            type="date"
            value={draftDeadline}
            onChange={(e) => setDraftDeadline(e.target.value)}
            onBlur={commitDeadline}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          item.deadline.toString()
        )}
      </StyledItemColDeadline>

      <StyledItemColTrash>
        <Icon type="trash" itemId={item.id} onChange={onDelete} />
      </StyledItemColTrash>
    </StyledItem>
  );
});

const StyledItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${v.borderColor};
  transition: opacity 0.8s ease;
  opacity: ${(props) => (props.$isFadingOut ? 0 : 1)};
`;
const StyledItemCol = styled.div`
  box-sizing: border-box;
  flex: 1;
  border-right: 1px solid ${v.borderColor};
  padding: 16px;
`;
const StyledItemColCheck = styled(StyledItemCol)`
  display: flex;
  justify-content: center;
`;
const StyledItemColName = styled(StyledItemCol)`
  flex: 4;
  cursor: pointer;
  input {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid ${v.borderColor};
    border-radius: 4px;
    padding: 8px;
    outline: none;
    &:focus-visible {
      outline: 2px solid #000;
    }
  }
`;
const StyledItemColDeadline = styled(StyledItemCol)`
  cursor: pointer;
  input {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid ${v.borderColor};
    border-radius: 4px;
    padding: 8px;
    outline: none;
    &:focus-visible {
      outline: 3px solid #000;
    }
  }
`;
const StyledItemColTrash = styled(StyledItemCol)`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
