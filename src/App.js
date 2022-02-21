import "./index.css";
import products from "./json/products";
import { useEffect, useState, useMemo } from "react";
import Cart from "./Cart";
import Product from "./Product";
import productKinds from './json/productKinds.json'

export default function App() {
  const [queryString, setQueryString] = useState('')
  const [selectedPkId, selectPkId] = useState()
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

  const filterProductsByProductKind = (productKindId) => {
    console.log({ products })
    return products.filter(p => {
      if (productKindId) {
        return p.productKindId === productKindId
      } else {
        return true
      }
    })
    // const myFunction = () => 'ciao'
    // // EQUIVALENTI
    // const myFunction = () => {
    //   return 'ciao'
    // }
  }

  const filterProducts = (qs, pkId) => {
    return products.filter(p => {
      if (pkId) {
        return p.productKindId === pkId
      } else {
        return true
      }
    }).filter(p => {
      const name = p.name?.toLowerCase()
      return name?.includes(qs.toLowerCase())
      // equivalente
      //return name?.indexOf(qs.toLowerCase()) > -1
    })
  }

  // eseguo la funzione (filterProductsByQueryString) soltanto quando cambia uno dei valori nell'array delle Deps
  // in questo  caso queryString. Il ritorno della funzione, lo assegno alla variabile filteredProducts
  // filteredProducts è ottimizzata perché verrà ricomputata soltanto quando cambia il filtro queryString
  const filteredProducts = useMemo(() => filterProducts(queryString, selectedPkId), [queryString, selectedPkId]);

  // useMemo esegue la funzione che scrivo come primo argomento, quando cambia l'array delle Deps.
  // In questo caso eseguo la funzione quando cambia selectedPkId
  // quando cambia selectedPkId? quando seleziono qualcosa attraverso il radio button
  // const filteredProductsByProductKind = useMemo(() => filterProductsByProductKind(selectedPkId), [selectedPkId]);

  const onProductKindChange = (pk, checked) => {
    checked && selectPkId(pk._id)
    // sono equivalenti
    // if (checked) {
    //   electedPkId(pk._id)
    // }
  }

  useEffect(() => {
    console.log({ selectedPkId })
  }, [selectedPkId]);



  return (
      <div>
        <div className="App">
          <div className="left-column">
            <input type="text" value={queryString} onChange={onInputChange} />
            {filteredProducts.map(p=> <Product key={p._id} product={p} onCartAdd={addToCart} />)}
          </div>
          <div className="right-column">
            {
              productKinds.map(pk => (
                  <div>
                    <input type="radio" value={pk.id} name="productKinds" onChange={(evt) => onProductKindChange(pk, evt.target.checked)} /> {pk.value}
                  </div>
              ))
            }
          </div>
        </div>
      </div>
  );
}
