import styled from "styled-components";

export const Checkbox = (props) => {
  const { isShowCompleted, setIsShowCompleted } = props;

  const handleChange = (e) => {
    setIsShowCompleted(e.target.checked);
  };
  return (
    <StyledCheckbox
      type="checkbox"
      checked={isShowCompleted}
      onChange={handleChange}
    ></StyledCheckbox>
  );
};

const StyledCheckbox = styled.input``;
