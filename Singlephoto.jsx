import React, { useEffect, useState } from "react";
import "../../Assets/Singlephoto/Singlephoto.css";
import { useParams } from "react-router-dom";

export const SinglePhoto = () => {
  const [data, setData] = useState();
  const { id } = useParams();
  async function getData() {
    const resp = await fetch(
      `https://api.slingacademy.com/v1/sample-data/photos/${id}`
    );
    const { photo } = await resp.json();
    setData(photo);
  }

  useEffect(() => {
    getData();
  }, []);
  return (
    <div id="singlePhoto">
      <img src={data?.url} alt="" />
      <div>
        <h1>{data?.title}</h1>
        <p>{data?.description}</p>
      </div>
    </div>
  );
};
