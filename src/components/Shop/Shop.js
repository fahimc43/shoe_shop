import React from "react";
import { Link } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import useProducts from "../../hooks/useProducts";
import { addToDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

function Shop() {
  // const [products, setProducts] = useState([]);
  // const [cart, setCart] = useState([]);
  const [products] = useProducts();
  const [carts, setCarts] = useCarts(products);
  // console.log(products);
  // useEffect(() => {
  //   fetch(
  //     " https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json"
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);

  // useEffect(() => {
  //   const storedCart = getStoredCart();
  //   let savedCart = [];
  //   for (const id in storedCart) {
  //     const addedProduct = products.find((product) => product.id === id);
  //     if (addedProduct) {
  //       const quantity = storedCart[id];
  //       addedProduct.quantity = quantity;
  //       savedCart.push(addedProduct);
  //     }
  //   }
  //   setCart(savedCart);
  // }, [products]);

  const handleAddToCart = (product) => {
    let newCart = [];
    const exists = carts.find((item) => item.id === product.id);
    if (!exists) {
      product.quantity = 1;
      newCart = [...carts, product];
    } else {
      const rest = carts.filter((item) => item.id !== product.id);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, exists];
    }
    setCarts(newCart);
    addToDb(product.id);
  };
  return (
    <div className="shop_container">
      <div className="product_container">
        {products.map((product) => (
          <Product
            product={product}
            key={product.id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart_container">
        <Cart cart={carts}>
          <Link to="/orders">
            <button>Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
}

export default Shop;
