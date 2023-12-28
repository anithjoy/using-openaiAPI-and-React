import { Item } from "./Item";

export const ItemList = ({ itemList, deleteItem }) => {
  return (
    <>
      <h1> Items List </h1>

      <ul class="list-group list-group-flush">
        {itemList && itemList.length > 0 ? (
          itemList.map((item) => (
            <Item key={item.id} item={item} deleteItem={deleteItem} />
          ))
        ) : (
          <li className="list-group-item">NONE</li>
        )}
      </ul>
    </>
  );
};
