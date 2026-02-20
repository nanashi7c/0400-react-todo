import styled from "styled-components";
import { Header } from "../atoms/layout/header";
import { Form } from "../organism/form";
import { List } from "../organism/list";
import { useCallback, useState } from "react";
import { AppDate } from "@/app/lib/AppDate";

export const Top = () => {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      name: "Task1",
      deadline: new AppDate().getDateInXMonth(1),
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task2",
      deadline: new AppDate().getDateInXMonth(2),
      isCompleted: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task3",
      deadline: new AppDate().getDateInXMonth(3),
      isCompleted: false,
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
      },
    ]);
    setName("");
    setDeadline(new AppDate().toString());
  }, [name, deadline]);

  const handleDeleteItem = useCallback((id) => {
    if (!window.confirm("このタスクを削除しますか？")) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const [fadingOutIds, setFadingOutIds] = useState(() => new Set());

  const updateItemById = useCallback((id, recipe) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? recipe(item) : item)),
    );
  }, []);

  const handleToggleCompleted = useCallback(
    (id, checked) => {
      if (checked && !isShowCompleted) {
        updateItemById(id, (item) => ({ ...item, isCompleted: true }));

        setFadingOutIds((prev) => {
          const next = new Set(prev);
          next.add(id);
          return next;
        });

        setTimeout(() => {
          setFadingOutIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }, 800);

        return;
      }

      updateItemById(id, (item) => ({ ...item, isCompleted: checked }));
      setFadingOutIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    [isShowCompleted, updateItemById],
  );

  const handleUpdateItem = useCallback(
    (id, patch) => updateItemById(id, (item) => ({ ...item, ...patch })),
    [updateItemById],
  );

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
          fadingOutIds={fadingOutIds}
          onDelete={handleDeleteItem}
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
