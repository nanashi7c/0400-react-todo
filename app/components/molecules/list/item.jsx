import { useMemo } from "react";
import { Row } from "./row";

export const Item = (props) => {
  const {
    items,
    isShowCompleted,
    fadingOutIds,
    onDelete,
    onToggleCompleted,
    onUpdateItem,
  } = props;

  const sortedItems = useMemo(() => {
    const visibleItems = items.filter(
      (item) =>
        isShowCompleted || !item.isCompleted || fadingOutIds?.has(item.id),
    );
    return [...visibleItems].sort(
      (a, b) => a.deadline.getTime() - b.deadline.getTime(),
    );
  }, [items, isShowCompleted, fadingOutIds]);

  return (
    <>
      {sortedItems.map((item) => (
        <Row
          key={item.id}
          item={item}
          isFadingOut={!!fadingOutIds?.has(item.id)}
          onDelete={onDelete}
          onToggleCompleted={onToggleCompleted}
          onUpdateItem={onUpdateItem}
        />
      ))}
    </>
  );
};
