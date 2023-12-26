import axios from "axios";
import { useEffect, useState } from "react";

export const NewApp = ({ data }) => {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/home")
  //     .then((res) => {
  //       console.log("newAPP", res);
  //     })
  //     .catch((err) => console.error(`Error -> ${err}`));
  // }, []);

  return (
    <>
      <div id="root2">
        <p>{(data && <p>{data}</p>) || <p>Express is not working</p>}</p>
      </div>
    </>
  );
};
