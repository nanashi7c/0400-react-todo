import { v } from "@/app/styles/variables";
import { memo } from "react";
import styled from "styled-components";

export const TrashIconCol = memo((props) => {
  const { itemId, onDeleteItem } = props;

  const handleClick = () => {
    onDeleteItem(itemId);
  };
  return <StyledTrash onClick={handleClick}></StyledTrash>;
});

const StyledTrash = styled.i.attrs({
  className: "fa-solid fa-trash",
  "aria-hidden": "true",
})`
  cursor: pointer;
  color: ${v.fontColorWeak};
`;
