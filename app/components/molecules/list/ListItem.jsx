import styled from "styled-components";
import { CheckIconCol } from "./Icon/CheckIconCol";
import { TrashIconCol } from "./Icon/TrashIconCol";
import { v } from "@/app/styles/variables";

export const ListItem = (props) => {
  const { items, isShowCompleted, onDeleteItem, onToggleCompleted } = props;
  const visibleItems = [...items].filter(
    (item) => isShowCompleted || !item.isCompleted || item.isFadingOut,
  );
  const sortedItems = [...visibleItems].sort(
    (a, b) => a.deadline.getTime() - b.deadline.getTime(),
  );
  return (
    <>
      {sortedItems.map((item) => (
        <StyledListItem
          key={item.id}
          $isCompleted={item.isCompleted}
          $isShowCompleted={isShowCompleted}
          $isFadingOut={item.isFadingOut}
        >
          <StyledListItemColCheck>
            <CheckIconCol
              itemId={item.id}
              checked={item.isCompleted}
              onToggleCompleted={onToggleCompleted}
            />
          </StyledListItemColCheck>

          <StyledListItemColName>{item.name}</StyledListItemColName>

          <StyledListItemColDeadline>
            {item.deadline.toString()}
          </StyledListItemColDeadline>
          <StyledListItemColTrash>
            <TrashIconCol itemId={item.id} onDeleteItem={onDeleteItem} />
          </StyledListItemColTrash>
        </StyledListItem>
      ))}
    </>
  );
};

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${v.borderColor};
  transition: opacity 0.8s ease;
  opacity: ${(props) =>
    // props.$isCompleted && !props.$isShowCompleted ? 0 : 1};
    props.$isFadingOut ? 0 : 1};
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
