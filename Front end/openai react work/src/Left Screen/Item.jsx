export const Item = ({ item, deleteItem }) => {
  const deleteItemHandler = () => {
    deleteItem(item.id);
  };
  return (
    <>
      <li>{item.name}</li>
      <button onClick={deleteItemHandler}>Delete</button>
    </>
  );
};
