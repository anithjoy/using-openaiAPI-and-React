import { Item } from "./Item";

export const ItemList = ({ itemList, deleteItem }) => {
  return (
    <>
      <h1>This is Items List </h1>

      <ul class="list-group list-group-flush">
        {itemList.map((item) => {
          return <Item key={item.id} item={item} deleteItem={deleteItem} />;
        })}
      </ul>
    </>
  );
};
