import { useMemo } from "react";
import { Row } from "./Row";

export const Item = (props) => {
  const {
    items,
    isShowCompleted,
    onDeleteItem,
    onToggleCompleted,
    onUpdateItem,
  } = props;

  const sortedItems = useMemo(() => {
    const visibleItems = items.filter(
      (item) => isShowCompleted || !item.isCompleted || item.isFadingOut,
    );
    return [...visibleItems].sort(
      (a, b) => a.deadline.getTime() - b.deadline.getTime(),
    );
  }, [items, isShowCompleted]);

  return (
    <>
      {sortedItems.map((item) => (
        <Row
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleCompleted={onToggleCompleted}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </>
  );
};
