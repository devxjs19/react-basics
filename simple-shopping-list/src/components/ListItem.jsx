import { IoMdTrash } from "react-icons/io";

const ListItem = ({ item, onPackedItem, onDeleteItem }) => {
  return (
    <li className="list-item">
      <label className="checkbox-container">
        <input
          type="checkbox"
          onChange={() => onPackedItem(item)}
          checked={item.packed}
        />
        <span className="checkmark"></span>
      </label>
      <span className={`item-name ${item.packed ? "packed" : ""}`}>
        {item.name}
      </span>
      <button onClick={() => onDeleteItem(item)}>
        <IoMdTrash className="icon icon-delete" />
        Del
      </button>
    </li>
  );
};

export default ListItem;
