import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import "./prodView.css";
import { addItemToCart } from "./helper/cartHelper";
import Menu from "./Menu";
import Base from "./Base";

import Toast from "./UI/Toast";
const ProductViewer = (props) => {
  const [showToast, setShowToast] = useState(false);
  const { name, description, price } = props.location.state;
  const cancelToast = () => {
    setShowToast(false);
  };
  const Left = () => {
    return <ImageHelper product={props.location.state} />;
  };
  const Right = () => {
    return (
      <div>
        <div className="prod__info text-white">
          <h3>{name}</h3>
          <p>{description}</p>
          <h3>price: {price}$</h3>
          <br />
          <p>Select size</p>
          <button className="btn btn-outline-success ">S</button>
          <button className="btn btn-outline-success ">M</button>
          <button className="btn btn-outline-success ">L</button>
        </div>
        <br />
        <div className="prod__button">
          {showToast && (
            <Toast show={showToast} name={name} onCancel={cancelToast} />
          )}
          <button
            onClick={() => {
              addItemToCart(props.location.state);
              setShowToast(true);
            }}
            className="btn btn-outline-success mt-2 mb-2"
          >
            Add To Cart
          </button>
        </div>
      </div>
    );
  };
  return (
    <div className="prod">
      <Menu />

      <div className="row">
        <div className="col-7 m-2">{Left()}</div>
        <div className="clo-5 m-2">{Right()}</div>
      </div>
      <div className="empty"></div>
      <Base showContainer={false}></Base>
    </div>
  );
};

export default ProductViewer;
