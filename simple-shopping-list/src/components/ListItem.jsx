const ListItem = ({ item, onDeleteItem }) => {
  return (
    <li>
      {item} <button onClick={() => onDeleteItem(item)}>Del</button>
    </li>
  );
};

export default ListItem;
