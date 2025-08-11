import { useState } from "react";

const ListInput = ({ listItems, onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (newItem !== "" && !listItems.includes(newItem)) {
          onAddItem(newItem);
        }

        setNewItem("");
      }}
    >
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default ListInput;
