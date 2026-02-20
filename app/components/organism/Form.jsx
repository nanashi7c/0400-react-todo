import styled from "styled-components";
import { FormFooter } from "../atoms/layout/formFooter";
import { InputLabel } from "../atoms/input/inputLabel";
import { InputField } from "../atoms/input/inputField";
import { v } from "@/app/styles/variables";

export const Form = (props) => {
  const { name, setName, deadline, setDeadline, handleAddItem } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItem();
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handleDeadlineChange = (e) => setDeadline(e.target.value);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputRow>
        <StyledNameInput>
          <InputLabel>タスク</InputLabel>
          <InputField
            type="text"
            name="name"
            placeholder="タスク名を入力"
            value={name}
            onChange={handleNameChange}
          ></InputField>
        </StyledNameInput>
        <StyledDeadlineInput>
          <InputLabel>期限日</InputLabel>
          <InputField
            type="date"
            name="deadline"
            value={deadline}
            onChange={handleDeadlineChange}
          ></InputField>
        </StyledDeadlineInput>
      </StyledInputRow>
      <FormFooter />
    </StyledForm>
  );
};

const StyledForm = styled.form`
  border: 1px solid ${v.borderColor};
  border-radius: 8px;
  padding: 8px 16px;
  margin-bottom: 32px;
`;
const StyledInputRow = styled.div`
  display: flex;
`;
const StyledNameInput = styled.div`
  flex: 4;
  padding: 8px 16px;
  display: grid;
`;
const StyledDeadlineInput = styled.div`
  flex: 1;
  padding: 8px 16px;
  display: grid;
`;
