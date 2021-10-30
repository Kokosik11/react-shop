import { useState, useEffect } from "react";

import "./style.css"

import ItemCard from '../ItemCard';

const Home = ({className, addItemToCart, items}) => {
    const componentClass = className;

    return (
        <div className={componentClass}>
            <div className={componentClass+"_items"}>
                {items.map(item => (
                    <ItemCard key={item.id} className={componentClass} item={item} addItemToCart={addItemToCart}/>
                ))}
            </div>
        </div>
    )
}

export default Home;