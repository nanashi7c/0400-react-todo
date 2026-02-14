import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderTitle>Todo</StyledHeaderTitle>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  padding: 16px 32px;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 64px;
`;

const StyledHeaderTitle = styled.h1`
  font-size: 16px;
  margin: 0;
`;
