import styled from "styled-components";
import { PrimaryButton } from "../button/PrimaryButton";

const onClickAdd = () => {
setItems()

};

export const FormFooter = () => {
  return (
    <StyledFormFooter>
      <PrimaryButton onClick={onClickAdd}>追加</PrimaryButton>
    </StyledFormFooter>
  );
};

const StyledFormFooter = styled.div`
  margin: 16px;
  display: flex;
  justify-content: flex-end;
`;
