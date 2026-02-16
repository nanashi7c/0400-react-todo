import { v } from "@/app/styles/variables";
import styled from "styled-components";

export const CheckIconCol = (props) => {
  const { itemId, checked, onToggleCompleted } = props;

  const handleChange = (e) => {
    onToggleCompleted(itemId, e.target.checked);
  };

  return (
    <StyledLabel>
      <StyledInput type="checkbox" checked={checked} onChange={handleChange} />
      <StyledIcon></StyledIcon>
    </StyledLabel>
  );
};

const StyledIcon = styled.i.attrs({
  className: "icon--check fa-solid fa-check",
  "aria-hidden": "true",
})`
  font-size: 12px;
  color: #fff;
  opacity: 0;
  transform: scale(0.9);
  transition:
    opacity 200ms ease,
    transform 200ms ease;
  pointer-events: none;
`;

// const StyledIcon = styled.i.attrs({
//   className: "fa-solid fa-check",
//   "aria-hidden": "true",
// })`
//   cursor: pointer;
//   color: ${v.fontColorWeak};
// `;

//TODO：チェックボックスが上手く表示できない（消えない）
const StyledLabel = styled.label`
  border: 1px solid ${v.borderColorCheckbox};
  border-radius: 50%;
  padding: 4px;
  width: 24px;
  height: 24px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  .icon--check {
    opacity: 0;
    color: #fff;
  }
  // :has(input:checked) {
  &:has(input:checked) {
    background: ${v.primaryColor};
  }
`;

const StyledInput = styled.input`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  margin: 0;

  opacity: 0;
  cursor: pointer;
  // &:checked + .icon--check {
  &:checked + ${StyledIcon} {
    opacity: 1;
    transform: scale(1);
  }
`;
// const StyledInput = styled.input`
//   border: 0;
//   position: absolute;
//   inset: 0;
//   opacity: 0;
//   cursor: pointer;
//   &:checked + .icon--check {
//     opacity: 1;
//   }
// `;
