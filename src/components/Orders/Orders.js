import React from "react";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { removeFromDb } from "../../utilities/fakedb";
import { useNavigate } from "react-router-dom";

function Orders() {
  const [products] = useProducts();
  const [carts, setCarts] = useCarts(products);
  const navigate = useNavigate();

  const handleRemoveProduct = (product) => {
    const rest = carts.filter((pd) => pd.id !== product.id);
    setCarts(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop_container">
      <div className="review_item_container">
        {carts.map((cart) => (
          <ReviewItem
            key={cart.id}
            cart={cart}
            handleRemoveProduct={handleRemoveProduct}
          />
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={carts}>
          <button onClick={() => navigate("/shipment")}>
            Proceed Shipment
          </button>
        </Cart>
      </div>
    </div>
  );
}

export default Orders;
