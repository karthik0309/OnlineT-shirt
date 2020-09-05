import React from "react";
import { API } from "../../backend";
import { Redirect } from "react-router-dom";

import { Button } from "react-bootstrap";
const Click = ({ product }) => {
  const imageurl = `${API}/product/${product._id}`;
  function ye() {
    return <Redirect to={imageurl} />;
  }
  return <button onClick={ye}>YO</button>;
};

export default Click;
