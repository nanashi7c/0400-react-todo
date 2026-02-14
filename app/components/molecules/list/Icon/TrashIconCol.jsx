import styled from "styled-components";

export const TrashIconCol = () => {
  return <StyledTrash type="checkbox"></StyledTrash>;
};

const StyledTrash = styled.i.attrs({
  className: "fa-solid fa-trash",
  "aria-hidden": "true",
})`
  cursor: pointer;
  color: v.$font-color-weak;
`;
