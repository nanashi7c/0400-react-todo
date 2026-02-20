import styled from "styled-components";
import { Title } from "../molecules/list/Title";
import { Header } from "../molecules/list/Header";
import { Item } from "../molecules/list/Item";

export const List = (props) => {
  const {
    items,
    fadingOutIds,
    onDelete,
    onToggleCompleted,
    onUpdateItem,
    isShowCompleted,
    setIsShowCompleted,
  } = props;

  return (
    <StyledList>
      <Header
        isShowCompleted={isShowCompleted}
        onToggleShowCompleted={setIsShowCompleted}
      >
        完了タスクを表示
      </Header>
      <Title
        checkbox={"\u00A0"}
        name="タスク"
        deadline="期限日"
        trash={"\u00A0"}
      />
      <StyledListContainer>
        <li>
          <Item
            items={items}
            isShowCompleted={isShowCompleted}
            fadingOutIds={fadingOutIds}
            onDelete={onDelete}
            onToggleCompleted={onToggleCompleted}
            onUpdateItem={onUpdateItem}
          />
        </li>
      </StyledListContainer>
    </StyledList>
  );
};

const StyledList = styled.div`
  // padding: 32px;
`;
const StyledListContainer = styled.div`
  list-style: none;
`;
