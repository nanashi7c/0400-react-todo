import styled from "styled-components";

export const InputLabel = (props) => {
  const { children } = props;
  return <StyledLabel>{children}</StyledLabel>;
};

const StyledLabel = styled.label`
  margin-bottom: 4px;
  font-size: 12px;
`;
