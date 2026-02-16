import styled from "styled-components";
import { ListTtl } from "../molecules/list/ListTtl";
import { ListHeader } from "../molecules/list/ListHeader";
import { ListItem } from "../molecules/list/ListItem";

export const List = (props) => {
  const {
    items,
    onDeleteItem,
    onToggleCompleted,
    isShowCompleted,
    setIsShowCompleted,
  } = props;

  return (
    <StyledList>
      <ListHeader
        isShowCompleted={isShowCompleted}
        setIsShowCompleted={setIsShowCompleted}
      >
        完了タスクを表示
      </ListHeader>
      <ListTtl
        checkbox={"\u00A0"}
        name="タスク"
        deadline="期限日"
        trash={"\u00A0"}
      />
      <StyledListContainer>
        <li>
          <ListItem
            items={items}
            isShowCompleted={isShowCompleted}
            onDeleteItem={onDeleteItem}
            onToggleCompleted={onToggleCompleted}
          />
        </li>
      </StyledListContainer>
    </StyledList>
  );
};

const StyledList = styled.div`
  padding: 32px;
`;
const StyledListContainer = styled.div`
  list-style: none;
`;
