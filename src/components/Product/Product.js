import React from "react";
import "./Product.css";

function Product(props) {
  const { name, img, price, seller, ratings } = props.product;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product_info">
        <p className="product_name">{name}</p>
        <p>Price: {price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings: {ratings}</p>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="btn_cart"
      >
        <p>Add to Cart</p>
      </button>
    </div>
  );
}

export default Product;
