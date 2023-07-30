import React, { useState } from "react";
import CartWidget from "./CartWidget";

const App = () => {
  const [cartItems, setCartItems] = useState([]);


  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  const handleCheckout = () => {
    alert("¡Compra realizada con éxito!");
    setCartItems([]);
  };

  return (
    <div>
      <h1>Tu tienda online</h1>
      <ul>

        {cartItems.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeItemFromCart(item)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <CartWidget itemCount={cartItems.length} />
      <button onClick={() => addItemToCart("Item 1")}>Agregar Item 1</button>
      <button onClick={() => addItemToCart("Item 2")}>Agregar Item 2</button>
      <button onClick={handleCheckout}>Comprar</button>
    </div>
  );
};

export default App;
