import { useState, useEffect } from "react";

import ListInput from "./ListInput";
import ListItems from "./ListItems";

const ShoppingList = () => {
  const [listItems, setListItems] = useState(() => {
    const saved = localStorage.getItem("listItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  const handleAddItem = (newItem) => {
    const updatedList = [...listItems, newItem];
    setListItems(updatedList);
    localStorage.setItem("listItems", JSON.stringify(updatedList));
  };

  const handleDeleteItem = (item) => {
    const updatedList = listItems.filter((el) => el !== item);
    setListItems(updatedList);
    localStorage.setItem("listItems", JSON.stringify(updatedList));
  };

  return (
    <div className="shopping-list__container">
      <ListInput listItems={listItems} onAddItem={handleAddItem} />
      <ListItems listItems={listItems} onDeleteItem={handleDeleteItem} />
    </div>
  );
};

export default ShoppingList;
