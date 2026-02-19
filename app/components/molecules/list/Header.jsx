import styled from "styled-components";
import { Checkbox } from "../../atoms/input/Checkbox";

export const Header = (props) => {
  const { children, isShowCompleted, setIsShowCompleted } = props;
  return (
    <StyledHeader>
      <label>
        <Checkbox
          isShowCompleted={isShowCompleted}
          setIsShowCompleted={setIsShowCompleted}
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
