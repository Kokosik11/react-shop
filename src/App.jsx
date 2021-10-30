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
import Categories from './components/Categories';
import CategoryItems from './components/CategoryItems';
import AboutUs from './components/AboutUs';

function App({ history }) {
  const [pathname, setPathname] = useState("");
  const [cart, setCart] = useState([])
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [onLoad, setOnLoad] = useState(false);
  const [status, setStatus] = useState(false);

  const handleBuy = () => {
    setStatus(true);
    setCart([]);
  }

  const addItemToCart = item => {
    setStatus(false);
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
          <AboutUs className="about-us"/>
        </Route>

        <Route exact path='/categories'>
          <Categories className="categories"/>
        </Route>

        <Route exact path='/cart'>
          <Cart removeItemFromCart={removeItemFromCart} handleBuy={handleBuy} status={status} className="cart" items={cart} />
        </Route>

        <Route exact path='/item/:id'>
          <Item onLoad={onLoad} addItemToCart={addItemToCart} className="item" items={items} />
        </Route>

        <Route exact path='/category/:name'>
          <CategoryItems className="category-items" addItemToCart={addItemToCart} />
        </Route>
        
        <Redirect from='/' to='/home'/>
      </Switch>
    </div>
  )
}

export default App;
