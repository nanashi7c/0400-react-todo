import styled from "styled-components";
import { v } from "@/app/styles/variables";

export const ListTtl = (props) => {
  const { checkbox, name, deadline, trash } = props;
  return (
    <StyledListTtl>
      <StyledListTtlCol>{checkbox}</StyledListTtlCol>
      <StyledListTtlColWide>{name}</StyledListTtlColWide>
      <StyledListTtlCol>{deadline}</StyledListTtlCol>
      <StyledListTtlCol>{trash}</StyledListTtlCol>
    </StyledListTtl>
  );
};

const StyledListTtl = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${v.borderColor};
`;
const StyledListTtlCol = styled.div`
  flex: 1;
  padding: 8px 16px;
  border-right: 1px solid ${v.borderColor};
  font-size: 12px;
  &:last-child {
    border-right: 0;
  }
`;
const StyledListTtlColWide = styled(StyledListTtlCol)`
  flex: 4;
`;
