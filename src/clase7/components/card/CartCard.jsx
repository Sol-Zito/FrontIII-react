import React from 'react'

const CartCard = () => {
  return (
    <div key={element.id} style={{ border: "2px solid white" }}>
            <h2>{element.name}</h2>
            <img src={element.img} alt={element.name} />
            <h3>${element.price}</h3>
          </div>
  )
}

export default CartCard
