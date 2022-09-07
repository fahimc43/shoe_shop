import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import "./ReviewItem.css";

function ReviewItem(props) {
  const { cart, handleRemoveProduct } = props;
  const { name, img, price, shipping, quantity } = cart;

  //   console.log(props.cart);
  return (
    <div className="review_item">
      <div>
        <img src={img} alt={name} />
      </div>
      <div className="review_item_details_container">
        <div className="review_item_details">
          <p className="product_name" title={name}>
            {name.length > 20 ? name.slice(0, 20) + "..." : name}
          </p>
          <p>
            price: $<span className="orange_color">{price}</span>
          </p>
          <p>
            <small>Shipping: ${shipping}</small>
          </p>
          <p>
            <small>Quantity: {quantity}</small>
          </p>
        </div>
        <div className="delete_container">
          <button
            onClick={() => handleRemoveProduct(cart)}
            className="delete_button"
          >
            <FontAwesomeIcon className="delete_icon" icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
