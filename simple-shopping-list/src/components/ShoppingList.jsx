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
    if (window.confirm("Are you sure?")) {
      const updatedList = listItems.filter((el) => el !== item);
      setListItems(updatedList);
      localStorage.setItem("listItems", JSON.stringify(updatedList));
    }

    return;
  };

  const handlePackedItem = (item) => {
    const updatedList = listItems.map((el) => {
      if (el.name === item.name) {
        return {
          ...el,
          packed: !el.packed,
        };
      }
      return el;
    });

    setListItems(updatedList);
  };

  const handleClearList = () => {
    if (window.confirm("Are you sure?")) {
      setListItems([]);
    }

    return;
  };

  return (
    <div className="shopping-list__container">
      <ListInput listItems={listItems} onAddItem={handleAddItem} />
      {listItems.length === 0 ? (
        <p>Add items to your list</p>
      ) : (
        <>
          <ListItems
            listItems={listItems}
            onPackedItem={handlePackedItem}
            onDeleteItem={handleDeleteItem}
          />
          <button onClick={handleClearList} className="clear-list-btn">
            Clear List
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingList;
