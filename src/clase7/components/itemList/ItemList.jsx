import React, { useState } from "react";
import { products } from "../../ProductsMock";
import ItemCard from "../card/ItemCard";

const ItemList = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existe = cart.some( (ele) => ele.id === item.id )
    if(!existe){

        setCart([...cart, {...item, quantity:1}]);
    }else{
        alert("ya existe en el carrito!")
    }
  };

  return (
    <div>
      <h1>Productos</h1>
      {products.map((product) => {
        return (
          <ItemCard key={product.id} product={product} addToCart={addToCart} />
        );
      })}

      <h2>Aca el carrito:</h2>
      <h3>Elementos: {cart.length}</h3>
      {cart.map((element) => {
        return (
          <div key={element.id} style={{ border: "2px solid white" }}>
            <h2>{element.name}</h2>
            <img src={element.img} alt={element.name} />
            <h3>${element.price}</h3>
            <h3>{element.quantity}</h3>
          </div>
        );
      })}

      <button onClick={() => setCart([])}>Vaciar carrito</button>
    </div>
  );
};

export default ItemList;
