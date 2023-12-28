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
        <div class="mb-3">
          <label htmlFor="item" for="basic-url" class="form-label">
            Enter Items that you have
          </label>
          <div class="form-span-input">
            <div class="input-group">
              <span class="input-group-text" id="basic-addon3">
                Items
              </span>{" "}
              <input
                value={item}
                onChange={(e) => {
                  setItem(e.target.value);
                }}
                type="text"
                class="form-control "
                id="basic-url"
                aria-describedby="basic-addon3 basic-addon4"
              ></input>
            </div>
          </div>
        </div>
        <div class="button-group">
          <button type="submit" class="btn btn-primary">
            Add item
          </button>
          <button
            onClick={searchRecipeHandler}
            type="button"
            class="btn btn-success"
            style={{ margin: "0 8px" }}
          >
            Search Recipe
          </button>
          <button
            onClick={clearRecipeHandler}
            type="button"
            class="btn btn-danger"
          >
            Clear All
          </button>
        </div>
      </form>
    </>
  );
};
