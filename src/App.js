import "./index.css";
import products from "./json/products";
import { useEffect, useState, useMemo } from "react";
import Cart from "./Cart";
import Product from "./Product";

export default function App() {
  const [queryString, setQueryString] = useState('')
  const [cart, setCart] = useState([]);

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

  const onInputChange = (evt) => {
    setQueryString(evt.target.value)
  }

  const filterProductsByQueryString = (qs) => {
    return products.filter(p => {
      const name = p.name?.toLowerCase()
      return name?.includes(qs.toLowerCase())
      // equivalente
      //return name?.indexOf(qs.toLowerCase()) > -1
    })
  }

  // eseguo la funzione (filterProductsByQueryString) soltanto quando cambia uno dei valori nell'array delle Deps
  // in questo  caso queryString. Il ritorno della funzione, lo assegno alla variabile filteredProducts
  // filteredProducts è ottimizzata perché verrà ricomputata soltanto quando cambia il filtro queryString
  const filteredProducts = useMemo(() => filterProductsByQueryString(queryString), [queryString]);


  return (
      <div>
        <div className="App">
          <div className="left-column">
            <input type="text" value={queryString} onChange={onInputChange} />
            {filteredProducts.map(p=> <Product key={p._id} product={p} onCartAdd={addToCart} />)}
          </div>
          <div className="right-column">
            <Cart addedProducts={cart} />
          </div>
        </div>
      </div>
  );
}
