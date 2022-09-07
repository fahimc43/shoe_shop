import React from "react";
import "./Cart.css";

function Cart(props) {
  const cart = props.cart;
  // console.log(cart);
  let total = 0;
  let shipping = 0;
  let quantity = 0;

  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }

  const tex = parseFloat((total * 0.1).toFixed(2));

  const grandTotal = total + shipping + tex;
  return (
    <div className="cart">
      <h3 className="cart_header">Orders Summery</h3>
      <div className="cart_info">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${shipping}</p>
        <p>Tex: ${tex}</p>
        <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
      </div>
      {props.children}
    </div>
  );
}

export default Cart;
