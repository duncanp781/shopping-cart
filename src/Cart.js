import React, { useState, useEffect, useCallback } from "react";
import "./cart-style.css";

const Cart = ({ show, toAdd }) => {
  const [cart, setCart] = useState({});

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

  useEffect(() => {
    toAdd && addToCart(toAdd);
  }, [toAdd, addToCart]);

  return (
    <>
      {show ? (
        <div className="cart-container-modal">
          <div className="cart-container">
            <table className="cart">
              <tr>
                <th></th>
                <th>Item:</th>
                <th>Price:</th>
                <th>Quantity:</th>
                <th>Total Price: </th>
              </tr>
              {Object.keys(cart).map((id) => {
                return <CartItem id={id} key={id} info={cart[id]} />;
              })}
            </table>
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
      <td>{price * quantity}</td>
    </tr>
  );
};

export default Cart;
