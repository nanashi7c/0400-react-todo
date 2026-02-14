import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Form } from "../organism/Form";
import { List } from "../organism/List";
import { useState } from "react";
import { AppDate } from "@/app/lib/AppDate";

//TODO
export const Top = () => {
  // const [items, setItems] = useState([
  //   { name: "Task1", deadline: new AppDate().getDateInXMonth(1) },
  //   { name: "Task2", deadline: new AppDate().getDateInXMonth(2) },
  //   { name: "Task3", deadline: new AppDate().getDateInXMonth(3) },
  // ]);

  // const [name, setName] = useState("");
  // const [deadline, setDeadline] = useState("");

  // const handleAddItem = () => {
  //   if (!name.trim()) {
  //     alert("タスク名を入力してください");
  //     return;
  //   }

  //     const deadline = AppDate.parse(data.get('deadline'))
  //   // if(!)
  // };

  return (
    <>
      <StyledContent>
        <Header />
        <Form />
        <List />
      </StyledContent>
    </>
  );
};

const StyledContent = styled.div`
  max-width: 986px;
  margin: 0 auto 64px;
`;
