import styled from "styled-components";
import { Header } from "../atoms/layout/Header";
import { Form } from "../organism/Form";
import { List } from "../organism/List";
import { useCallback, useState } from "react";
import { AppDate } from "@/app/lib/AppDate";

export const Top = () => {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      name: "Task1",
      deadline: new AppDate().getDateInXMonth(1),
      isCompleted: false,
      isFadingOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task2",
      deadline: new AppDate().getDateInXMonth(2),
      isCompleted: false,
      isFadingOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task3",
      deadline: new AppDate().getDateInXMonth(3),
      isCompleted: false,
      isFadingOut: false,
    },
  ]);

  const [isShowCompleted, setIsShowCompleted] = useState(false);
  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState(
    new AppDate().getDateInXMonth(1).toString(),
  );

  const handleAddItem = useCallback(() => {
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
      {
        id: crypto.randomUUID(),
        name: nameValue,
        deadline: parsedDeadline,
        isCompleted: false,
        isFadingOut: false,
      },
    ]);
    setName("");
    setDeadline(new AppDate().toString());
  }, [name, deadline]);

  const handleDeleteItem = useCallback((id) => {
    if (!window.confirm("このタスクを削除しますか？")) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const handleToggleCompleted = useCallback(
    (id, checked) => {
      if (checked && !isShowCompleted) {
        setItems((prev) =>
          prev.map((item) =>
            item.id === id
              ? { ...item, isFadingOut: true, isCompleted: true }
              : item,
          ),
        );
        setTimeout(() => {
          setItems((prev) =>
            prev.map((item) =>
              item.id === id ? { ...item, isFadingOut: false } : item,
            ),
          );
        }, 800);
        return;
      }

      setItems((prev) =>
        prev.map((item) =>
          item.id === id
            ? { ...item, isCompleted: checked, isFadingOut: false }
            : item,
        ),
      );
    },
    [isShowCompleted],
  );

  const handleUpdateItem = useCallback((id, patch) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
    );
  });

  return (
    <>
      <Header />
      <StyledContent>
        <Form
          name={name}
          setName={setName}
          deadline={deadline}
          setDeadline={setDeadline}
          handleAddItem={handleAddItem}
        />
        <List
          items={items}
          onDeleteItem={handleDeleteItem}
          onToggleCompleted={handleToggleCompleted}
          onUpdateItem={handleUpdateItem}
          isShowCompleted={isShowCompleted}
          setIsShowCompleted={setIsShowCompleted}
        />
      </StyledContent>
    </>
  );
};

const StyledContent = styled.div`
  max-width: 986px;
  margin: 0 auto 64px;
`;
