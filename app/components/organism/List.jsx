import styled from "styled-components";
import { Title } from "../molecules/list/title";
import { Header } from "../molecules/list/header";
import { Item } from "../molecules/list/item";

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
    <>
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
    </>
  );
};

const StyledListContainer = styled.div`
  list-style: none;
`;
