import { IoMdTrash } from "react-icons/io";

const ListItem = ({ item, onDeleteItem }) => {
  return (
    <li className="list-item">
      {item}{" "}
      <button onClick={() => onDeleteItem(item)}>
        <IoMdTrash className="icon icon-delete" />
        Del
      </button>
    </li>
  );
};

export default ListItem;
