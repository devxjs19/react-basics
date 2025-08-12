import { useState } from "react";
import { IoMdAddCircleOutline } from "react-icons/io";

const ListInput = ({ listItems, onAddItem }) => {
  const [newItem, setNewItem] = useState({ name: "", packed: false });

  const handleSumbit = (e) => {
    e.preventDefault();

    if (
      newItem.name.trim() !== "" &&
      !listItems.some((item) => item.name === newItem.name)
    ) {
      onAddItem(newItem);
    }

    setNewItem({ name: "", packed: false });
  };

  return (
    <form className="list-form" onSubmit={handleSumbit}>
      <input
        type="text"
        value={newItem.name}
        onChange={(e) =>
          setNewItem((prev) => ({ ...prev, name: e.target.value }))
        }
        placeholder="Add Item"
      />
      <button>
        <IoMdAddCircleOutline className="icon" /> Add
      </button>
    </form>
  );
};

export default ListInput;
