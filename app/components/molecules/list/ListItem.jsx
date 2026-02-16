import { useMemo } from "react";
import { ListRow } from "./ListRow";

export const ListItem = (props) => {
  const { items, isShowCompleted, onDeleteItem, onToggleCompleted } = props;

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
        <ListRow
          key={item.id}
          item={item}
          onDeleteItem={onDeleteItem}
          onToggleCompleted={onToggleCompleted}
        />
      ))}
    </>
  );
};
