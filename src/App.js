import "./index.css";
import products from "./json/products";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import Product from "./Product";

export default function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  const addToCart = (p) => {
    const newCart = { ...cart };
    if (cart[p._id]) {
      const qty = cart[p._id];
      newCart[p._id] = qty + 1;
    } else {
      newCart[p._id] = 1;
    }
    setCart(newCart);
  };

  return (
      <div>
        <div className="App">{products.map(p => <Product product={p} onCartAdd={addToCart} />)}</div>
        <Cart addedProducts={cart} />
      </div>
  );
}
