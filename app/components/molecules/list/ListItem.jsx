import styled from "styled-components";
import { CheckIconCol } from "./Icon/CheckIconCol";
import { TrashIconCol } from "./Icon/TrashIconCol";
import { v } from "@/app/styles/variables";
import { useState } from "react";
import { AppDate } from "@/app/lib/AppDate";

export const ListItem = () => {
  const [items, setItems] = useState([
    { name: "Task1", deadline: new AppDate().getDateInXMonth(1) },
    { name: "Task2", deadline: new AppDate().getDateInXMonth(2) },
    { name: "Task3", deadline: new AppDate().getDateInXMonth(3) },
  ]);

  return (
    <>
      {items.map((item) => (
        <StyledListItem>
          <StyledListItemColCheck>
            <CheckIconCol />
          </StyledListItemColCheck>

          <StyledListItemColName>{item.name}</StyledListItemColName>

          <StyledListItemColDeadline>
            {item.deadline.toString()}
          </StyledListItemColDeadline>
          <StyledListItemColTrash>
            <TrashIconCol />
          </StyledListItemColTrash>
        </StyledListItem>
      ))}
    </>
  );
};

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid ${v.borderColor};
  transition: opacity 0.8s ease;
`;
const StyledListItemCol = styled.div`
  box-sizing: border-box;
  flex: 1;
  border-right: 1px solid ${v.borderColor};
  padding: 16px;
`;
const StyledListItemColCheck = styled(StyledListItemCol)`
  display: flex;
  justify-content: center;
`;
const StyledListItemColName = styled(StyledListItemCol)`
  flex: 4;
  cursor: pointer;
  input {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid ${v.borderColor};
    border-radius: 4px;
    padding: 8px;
    outline: none;
    &:focus-visible {
      outline: 3px solid #666;
    }
  }
`;
const StyledListItemColDeadline = styled(StyledListItemCol)`
  cursor: pointer;
  input {
    width: 100%;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid ${v.borderColor};
    border-radius: 4px;
    padding: 8px;
    outline: none;
    &:focus-visible {
      outline: 3px solid #666;
    }
  }
`;
const StyledListItemColTrash = styled(StyledListItemCol)`
  font-size: 12px;
  display: flex;
  justify-content: center;
`;
