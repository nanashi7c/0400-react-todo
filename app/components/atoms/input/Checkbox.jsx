import styled from "styled-components";

export const Checkbox = (props) => {
  const { isShowCompleted, onToggleShowCompleted } = props;

  const handleChange = (e) => {
    onToggleShowCompleted(e.target.checked);
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
