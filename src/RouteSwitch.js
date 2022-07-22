import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Nav from "./Nav";
import Cart from './Cart';

const RouteSwitch = () => {
  const [toAdd, setToAdd] = useState(null);
  const [showCart, setShowCart] = useState(true);

  const flipCart = () => {
    setShowCart(!showCart);
  }

  const receiveFromShop = (item, val) => {
    setToAdd({
      ...item,
      quantity: val,
    })
  }


  return (
    <BrowserRouter>
      <Nav flip = {flipCart}/>
      <Cart toAdd ={toAdd} show = {showCart} flip = {flipCart}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop addToCart = {receiveFromShop}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
