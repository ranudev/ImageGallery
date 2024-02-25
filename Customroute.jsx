import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Home/Homepage";
import { SinglePhoto } from "../Singlephoto/Singlephoto";

function Customroute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:id" element={<SinglePhoto />} />
      </Routes>
    </div>
  );
}

export default Customroute;
