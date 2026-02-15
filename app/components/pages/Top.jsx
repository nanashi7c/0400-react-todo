import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Form } from "../organism/Form";
import { List } from "../organism/List";
import { useState } from "react";
import { AppDate } from "@/app/lib/AppDate";

export const Top = () => {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      name: "Task1",
      deadline: new AppDate().getDateInXMonth(1),
    },
    {
      id: crypto.randomUUID(),
      name: "Task2",
      deadline: new AppDate().getDateInXMonth(2),
    },
    {
      id: crypto.randomUUID(),
      name: "Task3",
      deadline: new AppDate().getDateInXMonth(3),
    },
  ]);

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleAddItem = () => {
    const nameValue = name.trim();
    if (!nameValue) {
      alert("タスク名を入力してください");
      return;
    }

    const parsedDeadline = AppDate.parse(deadline);
    if (!parsedDeadline) {
      alert("期限日を入力してください。");
      return;
    }

    setItems((prev) => [
      ...prev,
      { id: crypto.randomUUID(), name: nameValue, deadline: parsedDeadline },
    ]);
    setName("");
    setDeadline("");
  };

  return (
    <>
      <StyledContent>
        <Header />
        <Form
          name={name}
          setName={setName}
          deadline={deadline}
          setDeadline={setDeadline}
          handleAddItem={handleAddItem}
        />
        <List items={items} />
      </StyledContent>
    </>
  );
};

const StyledContent = styled.div`
  max-width: 986px;
  margin: 0 auto 64px;
`;
