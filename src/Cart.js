import React, { useState, useEffect, useCallback } from "react";
import "./cart-style.css";

const Cart = ({ show, toAdd, flip }) => {
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);

  const addToCart = useCallback(
    (item) => {
      let id = item.id;
      if (id) {
        delete item.id;
        setCart((cart) => {
          return {
            ...cart,
            [id]: {
              ...item,
              quantity: (cart[id] ? cart[id].quantity : 0) + item.quantity,
            },
          };
        });
      }
    },
    [setCart]
  );


  //Remove cart if clicked out
  const handleClickOut = (e) => {
    if (e.target === e.currentTarget) {
      flip();
    }
  };

  //Add new item to cart
  useEffect(() => {
    toAdd && addToCart(toAdd);
  }, [toAdd, addToCart]);

  //Update cart total
  useEffect(() => {
    setTotal(
      Object.entries(cart).reduce(
        (newTot, [id, obj]) => newTot + obj.quantity * obj.price,
        0
      )
    );
  }, [setTotal, cart]);

  return (
    <>
      {show ? (
        <div className="cart-container-modal" onClick={handleClickOut}>
          <div className="cart-container">
            <h2 className="cart-title">Shopping Cart:</h2>
            <table className="cart">
              {Object.keys(cart).length > 0 ? (
                <tr>
                  <th></th>
                  <th>Item:</th>
                  <th>Price:</th>
                  <th>Quantity:</th>
                  <th>Total Price: </th>
                </tr>
              ) : (
                <div className="empty-text">
                  Your cart is currently empty. Add some items!
                </div>
              )}
              {Object.keys(cart).map((id) => {
                return <CartItem id={id} key={id} info={cart[id]} />;
              })}
            {Object.keys(cart).length > 0 ?(<tr>
                <th></th>
                <th>Total:</th>
                <th></th>
                <th></th>
                <th>${total}</th>
              </tr>) : null }
            </table>
            {Object.keys(cart).length > 0 ? (<button className = 'cart-buy'>Proceed to Purchase</button>): null}
          </div>
        </div>
      ) : null}
    </>
  );
};

const CartItem = ({ id, info }) => {
  let { image, name, price, quantity } = info;
  return (
    <tr className="item">
      <td>{image ? <img src={image} alt={name} /> : <span></span>}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>${price * quantity}</td>
    </tr>
  );
};

export default Cart;
