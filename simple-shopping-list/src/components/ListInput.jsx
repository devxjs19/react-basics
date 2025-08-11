import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const ListInput = ({ listItems, onAddItem }) => {
  const [newItem, setNewItem] = useState("");

  return (
    <form
      className="list-form"
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
        placeholder="Add Item"
      />
      <button>
        <IoMdAddCircleOutline className="icon" /> Add
      </button>
    </form>
  );
};

export default ListInput;
