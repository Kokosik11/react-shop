import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./style.css"

import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const Item = ({ onLoad, addItemToCart, className, items }) => {
    const componentClass = className;

    let { id } = useParams();
    let item = items[id-1];

    return onLoad && (
        <div className={className}>
            <div className={componentClass+"_container"}>
                <div className={className+"_image"}>
                    <img src={item.image} alt={item.title}/>
                </div>

                <div className={className+"_info"}>
                    <div className={className+"_info-header"}>
                        <h2>{item.title}</h2>
                        <div className={componentClass+"_description"}>{item.description}</div>
                    </div>
                    <div className={className+"_info-footer"}>
                        <Rater total={5} rating={item.rating.rate}/>
                        <div className={className+"_price"}>${item.price}</div>
                        <button onClick={() => addItemToCart(item)} className={className+"_tocart"}>В корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item;