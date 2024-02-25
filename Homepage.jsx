import React, { useEffect, useState } from "react";
import Image from "../Image/Image";
import "../../Assets/Home/Home.css";

function Homepage() {
  const [data, setData] = useState([]);
  //use to update a data {useState}
  async function togetpics() {
    const pics = await fetch(
      "https://api.slingacademy.com/v1/sample-data/photos?limit=20"
    );

    const { photos } = await pics.json();
    console.log("Data", photos);
    setData(photos);
  }

  useEffect(() => {
    togetpics();
  }, []);

  return (
    <div id="parent">
      {data.map((e, i) => {
        return <Image URL={e.url} id={e.id} key={i} />;
      })}
    </div>
  );
}

export default Homepage;
//useState is used to manage state within a component, allowing you to store and update data.
