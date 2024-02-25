import React from "react";
import { useNavigate } from "react-router-dom";

function Image({ URL, id }) {
  const navigate = useNavigate();

  function gotopage() {
    navigate(`/${id}`);
  }
  return (
    <div className="images">
      <img src={URL} alt="" onClick={gotopage} />
    </div>
  );
}

export default Image;
