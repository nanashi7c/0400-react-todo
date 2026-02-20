import styled from "styled-components";
import { Checkbox } from "../../atoms/input/checkbox";

export const Header = (props) => {
  const { children, isShowCompleted, onToggleShowCompleted } = props;
  return (
    <StyledHeader>
      <label>
        <Checkbox
          isShowCompleted={isShowCompleted}
          onToggleShowCompleted={onToggleShowCompleted}
        />
        {children}
      </label>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-end;
`;
