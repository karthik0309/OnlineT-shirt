import React, { useState } from "react";
import ImageHelper from "./helper/ImageHelper";
import { Redirect } from "react-router-dom";
import { addItemToCart, removeItemFromCart } from "./helper/cartHelper";
import "./card.css";
import { isAutheticated } from "../auth/helper";
import { Link } from "react-router-dom";
const Card = ({
  product,
  hideStyle = true,
  addtoCart = true,
  Style = true,
  removeFromCart = false,
  setReload = (f) => f,
  //   function(f){return f}
  reload = undefined,
}) => {
  const [redirect, setRedirect] = useState(false);

  const cartTitle = product ? product.name : "A photo from pexels";
  const cartDescrption = product ? product.description : "Default description";
  const cartPrice = product ? product.price : "DEFAULT";

  const getARedirect = (redirect) => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };

  const showAddToCart = (addtoCart) => {
    return (
      addtoCart && (
        <Link
          to={{ pathname: `/product/${product._id}}`, state: product }}
          style={{ textDecoration: "none" }}
        >
          <button className="btn btn-block btn-outline-success mt-2 mb-2">
            CheckProduct
          </button>
        </Link>
      )
    );
  };

  const showRemoveFromCart = (removeFromCart) => {
    return (
      removeFromCart && (
        <button
          onClick={() => {
            removeItemFromCart(product._id);

            setReload(!reload);
          }}
          className="btn btn-block btn-outline-danger mt-2 mb-2"
        >
          Remove from cart
        </button>
      )
    );
  };

  return (
    <div>
      {hideStyle && (
        <div className="product__info">
          <ImageHelper product={product} />

          <p>{product.name}</p>
          {isAutheticated() && (
            <div className="col-12">{showAddToCart(addtoCart)}</div>
          )}
        </div>
      )}
      {Style && (
        <div className="card text-white bg-dark border border-info ">
          <div className="card-header lead">{cartTitle}</div>
          <div className="card-body">
            {getARedirect(redirect)}
            <ImageHelper product={product} />

            <p className="lead bg-success font-weight-normal text-wrap">
              {cartDescrption}
            </p>
            <p className="btn btn-success rounded  btn-sm px-4">
              $ {cartPrice}
            </p>
            <div className="row">
              <div className="col-12">{showAddToCart(addtoCart)}</div>
              <div className="col-12">{showRemoveFromCart(removeFromCart)}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
