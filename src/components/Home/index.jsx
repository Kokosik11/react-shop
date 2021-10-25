import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./style.css"

const Home = ({className, addItemToCart, items}) => {
    const componentClass = className;

    return (
        <div className={componentClass}>
            <div className={componentClass+"_items"}>
                {items.map(item => (
                    <div key={item.id} className={componentClass+"_item"}>
                        <Link className={componentClass+"_link"} to={`/item/${item.id}`}>
                            <img src={item.image}/>
                        </Link>

                        <div className={componentClass+"_item-info"}>
                            <div className={componentClass+"_item-title"}>{item.title}</div>
                            <div className={componentClass+"_item-row"}>
                                <button onClick={() => addItemToCart(item)} className={componentClass+"_item-tocart"}>В корзину</button>
                                <span className={componentClass+"_item-rate"}>{item.rating.rate}</span>
                                <div className={componentClass+"_item-price"}>${item.price}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className={componentClass+"_filter"}>
                
            </div>
        </div>
    )
}

export default Home;