import styled from "styled-components";
import { FormFooter } from "../atoms/layout/FormFooter";
import { InputLabel } from "../atoms/input/InputLabel";
import { InputField } from "../atoms/input/InputField";
import { v } from "@/app/styles/variables";

export const Form = () => {
  return (
    <StyledForm>
      <StyledInputRow>
        <StyledNameInput>
          <InputLabel>タスク</InputLabel>
          <InputField
            type="text"
            name="name"
            placeholder="タスク名を入力"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></InputField>
        </StyledNameInput>
        <StyledDeadlineInput>
          <InputLabel>期限日</InputLabel>
          <InputField type="date" name="deadline"></InputField>
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
