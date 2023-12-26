import { useState } from "react";
import { FormItem } from "./FormItem";
import { ItemList } from "./ItemList";
import { NewApp } from "../Right Screen/NewApp";
import axios from "axios";

export default function App() {
  const [itemList, setNewItemList] = useState([]);
  const [data, setNewData] = useState("Welcome to ChefGPT");

  const addItem = (item) => {
    setNewItemList((currentItemList) => {
      return [...currentItemList, { id: crypto.randomUUID(), name: item }];
    });
  };

  const deleteItem = (id) => {
    setNewItemList((currentItemList) => {
      return currentItemList.filter((item) => item.id !== id);
    });
    // const newItem = itemList.filter((eachItem)=>eachItem.id !== id)
    console.log("Delete item is running");
  };

  const searchRecipe = () => {
    let result = "";
    setNewData("ChefGPT is Typing....");
    axios
      .post("http://localhost:3000/home", { itemList })
      .then((res) => {
        result = result + res.data.message;
        console.log("App.jsx", result);
        setNewData(result);
      })
      .catch((err) => console.error(`Error -> ${err}`));
    // console.log("Searching recipe...");
    // console.log(itemList);
  };

  const clearRecipe = () => {
    setNewItemList([]);
  };

  return (
    <>
      <div id="root1">
        <div id="logo">
          <h1>ChefGPT</h1>
        </div>

        <FormItem
          addItem={addItem}
          searchRecipe={searchRecipe}
          clearRecipe={clearRecipe}
        />
        <ItemList itemList={itemList} deleteItem={deleteItem} />
      </div>
      <div id="root2">
        <NewApp data={data} />
      </div>
    </>
  );
}
