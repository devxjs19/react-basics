import ListItem from "./ListItem";

const ListItems = ({ listItems, onPackedItem, onDeleteItem }) => {
  return (
    <ul className="list-items">
      {listItems.map((item) => (
        <ListItem
          key={item.name}
          item={item}
          onPackedItem={onPackedItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </ul>
  );
};

export default ListItems;
