import ListItem from "./ListItem";

const ListItems = ({ listItems, onDeleteItem }) => {
  return (
    <ul>
      {listItems.map((item) => (
        <ListItem key={item} item={item} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
  );
};

export default ListItems;
