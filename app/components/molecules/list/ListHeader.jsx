import styled from "styled-components";
import { Checkbox } from "../../atoms/input/Checkbox";

export const ListHeader = (props) => {
  const { children, isShowCompleted, setIsShowCompleted } = props;
  return (
    <StyledListHeader>
      <label>
        <Checkbox
          isShowCompleted={isShowCompleted}
          setIsShowCompleted={setIsShowCompleted}
        />
        {children}
      </label>
    </StyledListHeader>
  );
};

const StyledListHeader = styled.div`
  padding: 16px;
  margin-bottom: 32px;
  display: flex;
  justify-content: flex-end;
`;
