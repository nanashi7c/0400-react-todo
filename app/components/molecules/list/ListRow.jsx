import { v } from "@/app/styles/variables";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CheckIconCol } from "./Icon/CheckIconCol";
import { TrashIconCol } from "./Icon/TrashIconCol";
import { AppDate } from "@/app/lib/AppDate";

export const ListRow = memo(function ListRow(props) {
  const { item, onDeleteItem, onToggleCompleted, onUpdateItem } = props;

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

  // useEffect(() => {
  //   if (isEditingDeadline) {
  //     deadlineInputRef.current?.focus();
  //   }
  // }, [isEditingName]);

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
    setIsEditingDeadline(false);
  }, [draftDeadline, item.deadline, item.id, onUpdateItem]);

  return (
    <StyledListItem $isFadingOut={item.isFadingOut}>
      <StyledListItemColCheck>
        <CheckIconCol
          itemId={item.id}
          checked={item.isCompleted}
          onToggleCompleted={onToggleCompleted}
        />
      </StyledListItemColCheck>

      <StyledListItemColName onClick={startEditName}>
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
      </StyledListItemColName>

      <StyledListItemColDeadline onClick={startEditDeadline}>
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
        {/* {item.deadline.toString()} */}
      </StyledListItemColDeadline>

      <StyledListItemColTrash>
        <TrashIconCol itemId={item.id} onDeleteItem={onDeleteItem} />
      </StyledListItemColTrash>
    </StyledListItem>
  );
});

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${v.borderColor};
  transition: opacity 0.8s ease;
  opacity: ${(props) => (props.$isFadingOut ? 0 : 1)};
`;
const StyledListItemCol = styled.div`
  box-sizing: border-box;
  flex: 1;
  border-right: 1px solid ${v.borderColor};
  padding: 16px;
`;
const StyledListItemColCheck = styled(StyledListItemCol)`
  display: flex;
  justify-content: center;
`;
const StyledListItemColName = styled(StyledListItemCol)`
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
      outline: 3px solid #666;
    }
  }
`;
const StyledListItemColDeadline = styled(StyledListItemCol)`
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
      outline: 3px solid #666;
    }
  }
`;
const StyledListItemColTrash = styled(StyledListItemCol)`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
