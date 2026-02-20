import styled from "styled-components";
import { v } from "@/app/styles/variables";

export const Title = (props) => {
  const { checkbox, name, deadline, trash } = props;
  return (
    <StyledTitle>
      <StyledTitleCol>{checkbox}</StyledTitleCol>
      <StyledTitleColWide>{name}</StyledTitleColWide>
      <StyledTitleCol>{deadline}</StyledTitleCol>
      <StyledTitleCol>{trash}</StyledTitleCol>
    </StyledTitle>
  );
};

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${v.borderColor};
`;
const StyledTitleCol = styled.div`
  flex: 1;
  padding: 8px 16px;
  border-right: 1px solid ${v.borderColor};
  font-size: 12px;
  &:last-child {
    border-right: 0;
  }
`;
const StyledTitleColWide = styled(StyledTitleCol)`
  flex: 4;
`;
