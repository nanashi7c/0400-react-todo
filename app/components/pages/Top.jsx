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
      // isFadingOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task2",
      deadline: new AppDate().getDateInXMonth(2),
      isCompleted: false,
      // isFadingOut: false,
    },
    {
      id: crypto.randomUUID(),
      name: "Task3",
      deadline: new AppDate().getDateInXMonth(3),
      isCompleted: false,
      // isFadingOut: false,
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
        // isFadingOut: false,
      },
    ]);
    setName("");
    setDeadline(new AppDate().toString());
  }, [name, deadline]);

  const handleDeleteItem = useCallback((id) => {
    if (!window.confirm("このタスクを削除しますか？")) return;
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  // フェードアウト中（削除アニメーション待ち）の item.id を Set で管理する。
  // Set に入っている id は「いま消えかけている最中」として扱い、描画側で $isFadingOut などに使う。
  const [fadingOutIds, setFadingOutIds] = useState(() => new Set());

  // 指定した id の item だけを更新するための共通ユーティリティ。
  // setItems の関数更新 + map で immutably（元配列を壊さず）更新し、対象 item にだけ recipe(=更新関数) を適用する。
  const updateItemById = useCallback((id, recipe) => {
    setItems((prev) =>
      prev.map((item) => (item.id === id ? recipe(item) : item)),
    );
  }, []);

  // 完了チェックの切り替え処理。
  // 「完了タスクを表示しない」モード（isShowCompleted=false）のときに完了チェックを入れた場合は、
  // いきなりリストから消すのではなく、先にフェードアウト用フラグ（fadingOutIds）を立てて 800ms アニメーションさせてから片付ける。
  const handleToggleCompleted = useCallback(
    (id, checked) => {
      if (checked && !isShowCompleted) {
        // setItems((prev) =>
        //   prev.map((item) =>
        //     item.id === id
        //       ? { ...item, isFadingOut: true, isCompleted: true }
        //       : item,
        //   ),
        // );
        // まず isCompleted を true に更新（完了扱いにする）
        updateItemById(id, (item) => ({ ...item, isCompleted: true }));
        // 次に、この id を「フェードアウト中」として Set に追加し、CSS 側でフェードアウトを開始させる
        setFadingOutIds((prev) => {
          const next = new Set(prev);
          next.add(id);
          return next;
        });

        setTimeout(() => {
          // setItems((prev) =>
          //   prev.map((item) =>
          //     item.id === id ? { ...item, isFadingOut: false } : item,
          //   ),
          // );
          setFadingOutIds((prev) => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }, 800);
        // この分岐はここで処理を終える（以降の通常処理を実行しない）
        return;
      }

      // setItems((prev) =>
      //   prev.map((item) =>
      //     item.id === id
      //       ? { ...item, isCompleted: checked, isFadingOut: false }
      //       : item,
      //   ),
      // );
      updateItemById(id, (item) => ({ ...item, isCompleted: checked }));
      setFadingOutIds((prev) => {
        const next = new Set(prev);
        next.delete(id);
        return next;
      });
    },
    // [isShowCompleted],
    [isShowCompleted, updateItemById],
  );

  // const handleUpdateItem = useCallback((id, patch) => {
  //   setItems((prev) =>
  //     prev.map((item) => (item.id === id ? { ...item, ...patch } : item)),
  //   );
  // });

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
