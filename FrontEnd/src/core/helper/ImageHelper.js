import React from "react";
import { API } from "../../backend";

import "../imageHelper.css";
import { Redirect } from "react-router-dom";
const ImageHelper = ({ product }) => {
  const imageurl = product
    ? `${API}/product/photo/${product._id}`
    : `https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  const prod = `/product/view/${product._id}`;
  return (
    <div className="image">
      <img className="image__img" src={imageurl} alt="photo" />
    </div>
  );
};

export default ImageHelper;
