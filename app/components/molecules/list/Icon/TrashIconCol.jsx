import styled from "styled-components";

export const TrashIconCol = (props) => {
  const { itemId, onDeleteItem } = props;

  const handleClick = () => {
    onDeleteItem(itemId);
  };
  return <StyledTrash type="checkbox" onClick={handleClick}></StyledTrash>;
};

const StyledTrash = styled.i.attrs({
  className: "fa-solid fa-trash",
  "aria-hidden": "true",
})`
  cursor: pointer;
  color: v.$font-color-weak;
`;
