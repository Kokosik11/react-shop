import React, { useState, useEffect } from 'react';
import {
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

import './App.css';

import Header from './components/Header';

import Home from './components/Home';
import Cart from './components/Cart';
import Item from './components/Item';

function App({ history }) {
  const [pathname, setPathname] = useState("");
  const [cart, setCart] = useState([]);

  const addItemToCart = item => {
    setCart(cart => [...cart, item]);
  }
  
  const removeItemFromCart = index => {
    setCart(cart.filter((c, i) => index !== i))
  }

  const onSetPathname = () => {
    setTimeout(() => {
      setPathname(window.location.pathname);
    })
  }

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
    console.log(cart)
  }, [])

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [onLoad, setOnLoad] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => { 
        setItems(json)
        setOnLoad(onLoad => true);
      })
  }, [])

  

  return (
    <div className="App">
      <Header className="header" pathname={pathname} setPathname={onSetPathname} />
      <Switch>
        <Route exact path='/home'>
          <Home items={items} addItemToCart={addItemToCart} className="home"/>
        </Route>

        <Route exact path='/about-us'>
          <h1>О нас</h1>
        </Route>

        <Route exact path='/categories'>
          <h1>Категории</h1>
        </Route>

        <Route exact path='/cart'>
          <Cart removeItemFromCart={removeItemFromCart} className="cart" items={cart} />
        </Route>

        <Route exact path='/item/:id'>
          <Item onLoad={onLoad} addItemToCart={addItemToCart} className="item" items={items} />
        </Route>
        
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  )
}

export default App;
