import { v } from "@/app/styles/variables";
import styled from "styled-components";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
};

const StyledPrimaryButton = styled.button`
  background: ${v.primaryColor};
  color: ${v.fontColorLight};
  padding: 8px 32px;
  border: 0;
  border-radius: 8px;
`;
