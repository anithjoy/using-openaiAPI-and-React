import { useState } from "react";

export const FormItem = ({ addItem, searchRecipe, clearRecipe }) => {
  const [item, setItem] = useState("");

  //  item detail - id , name(item)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (item === "") {
      return;
    }
    addItem(item);
    setItem("");
  };

  const searchRecipeHandler = () => {
    searchRecipe();
  };

  const clearRecipeHandler = () => {
    clearRecipe();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="item">Enter Items that you have</label>
          <input
            value={item}
            type="text"
            id="item"
            onChange={(e) => {
              setItem(e.target.value);
            }}
          ></input>
        </div>

        <button type="submit">Add item</button>
        <button onClick={searchRecipeHandler}>Search Recipe</button>
        <button onClick={clearRecipeHandler}>Clear All</button>
      </form>
    </>
  );
};
