export const Item = ({ item, deleteItem }) => {
  const deleteItemHandler = () => {
    deleteItem(item.id);
  };
  return (
    <>
      <li class="list-group-item">
        {item.name}

        <button
          onClick={deleteItemHandler}
          type="button"
          class="btn btn-outline-danger"
        >
          Delete
        </button>
      </li>
    </>
  );
};
