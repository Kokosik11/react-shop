import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./style.css";

const Cart = ({ removeItemFromCart, handleBuy, status, className, items }) => {
    const componentClass = className;

    const [summ, setSumm] = useState(0);

    const handleSetSumm = () => {
        setSumm(summ => summ = 0); 
        return () => {
            setSumm(summ => summ = 0); 
        }
    } 

    useEffect(() => {
        handleSetSumm();
    }, [])

    useEffect(() => {
        let _summ = items.map(item => summ + item.price);
        setSumm(_summ.reduce((a,b) => a + b, 0));
    }, [items])

    return items.length && (
        <div className={componentClass}>
            <div className={componentClass+"_container"}>
                {items.map((item, index) => (
                    <div className={componentClass+"_row"} key={index}>
                        <div className={componentClass+"_info"}>
                            <div className={componentClass+"_image"}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <Link className={componentClass+"_title-link"} to={`/item/${item.id}`}>
                                <div className={componentClass+"_title"}>{item.title}</div>
                            </Link>
                            <div className={componentClass+"_price"}>${item.price}</div>
                        </div>

                        <button onClick={() => { removeItemFromCart(index); handleSetSumm();}} className={componentClass+"_remove"}>x</button>

                    </div>
                ))}

                <div className={componentClass+"_ordering"}>
                    <div className={componentClass+"_row"}>
                        <div className={componentClass+"_summ"}>Всего: <b>${summ.toFixed(2)}</b></div>
                        <button onClick={handleBuy} className={componentClass+"_buy"}>Купить</button>
                    </div>
                </div>
            </div>
        </div>
    ) || (
        <div className={componentClass}>
            <div className={componentClass+"_container is-empty"}>
                {status && (
                    <div className={componentClass+"_row status"}>
                        Покупка успешно оформлена!
                    </div>
                )}
                <div className={componentClass+"_row"}>
                    <h3>Корзина пуста</h3>
                </div>
            </div>
        </div>
    )
}

export default Cart;