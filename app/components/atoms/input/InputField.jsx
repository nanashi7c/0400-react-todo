import { v } from "@/app/styles/variables";
import styled from "styled-components";

export const InputField = (props) => {
  // const { children } = props;
  return <StyledField {...props}></StyledField>;
};

const StyledField = styled.input`
  width: 100%;
  border: 1px solid ${v.borderColor};
  border-radius: 8px;
  padding: 8px;
  box-sizing: border-box;
`;
