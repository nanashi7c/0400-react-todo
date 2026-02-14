import { v } from "@/app/styles/variables";
import styled from "styled-components";

export const CheckIconCol = () => {
  return (
    <StyledLabel>
      <StyledInput type="checkbox" />
      <StyledIcon></StyledIcon>
    </StyledLabel>
  );
};

//TODO：チェックボックスが上手く表示できない（消えない）
const StyledLabel = styled.label`
  border: 1px solid ${v.borderColorCheckbox};
  border-radius: 50%;
  padding: 4px;
  width: 16px;
  height: 16px;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  .icon--check {
    opacity: 0;
    color: #fff;
  }
  :has(input:checked) {
    background: ${v.primaryColor};
  }
`;
const StyledInput = styled.input`
  border: 0;
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
  &:checked + .icon--check {
    opacity: 1;
  }
`;
const StyledIcon = styled.i.attrs({
  className: "fa-solid fa-check",
  "aria-hidden": "true",
})`
  cursor: pointer;
  color: ${v.fontColorWeak};
`;
