import React, { useState, useEffect } from "react";
import "../styles.css";
import { API } from "../backend";
import Menu from "./Menu";
import Base from "./Base";
import Card from "./Card";

import "./home.css";
import { getProducts } from "./helper/coreapicalls";
import Carousel from "react-bootstrap/Carousel";
import { imageArr } from "../imageURLS";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  const loadAllProduct = () => {
    getProducts().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setProducts(data);
      }
    });
  };

  useEffect(() => {
    loadAllProduct();
  }, []);
  const categories = {};
  products.forEach((product) => {
    if (!categories[product.category.name]) {
      categories[product.category.name] = [];
    }
    categories[product.category.name].push(product);
  });
  console.log(products, categories);
  return (
    <div>
      <Menu></Menu>
      <br />
      <Carousel>
        {imageArr.map((image) => (
          <Carousel.Item key={image.id}>
            <img width={1400} height={500} src={image.url} alt="First slide" />
            <Carousel.Caption>
              <h3>{image.captionLabel}</h3>
              <p>{image.captionDescription}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="shirts">
        {Object.keys(categories).map((categ) => (
          <>
            <span className="shirt__categ">{categ}</span>
            <div className="row shirt__row">
              <div className="shirt__grid">
                {categories[categ].map((product, index) => {
                  return (
                    <div key={index} className="product">
                      <Card product={product} Style={false} />
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        ))}
      </div>
      <Base showContainer={false} />
    </div>
  );
}
