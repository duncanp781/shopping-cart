import Card from "./Card";
import "./shop-style.css";
import React, { useState } from "react";
import uniqid from 'uniqid';

const Shop = (props) => {
  const submit = (id, val) => {
    props.addToCart({...inventory[id], id: id}, parseInt(val))
  };
  const [inventory, setInventory] = useState({
    [uniqid()]: 
    { 
      name: "Shoes",
      price: 10,
      image: null,
    },
    [uniqid()]: {
      name: "Clothes",
      price: 15,
      image: null,
    }
});

  return (
    <div className="shop">
      {Object.keys(inventory).map((entry) => {
        return <Card item={inventory[entry]} id = {entry} key = {entry} submit = {submit}/>;
      })}
    </div>
  );
};

export default Shop;
