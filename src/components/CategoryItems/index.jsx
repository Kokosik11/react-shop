import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ItemCard from '../ItemCard';
import "./style.css";

const CategoryItems = ({ className, addItemToCart }) => {
    const componentClass = className;
    let { name } = useParams();

    const [categoryItems, setCategoryItems] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/category/${name}`)
            .then(res => res.json())
            .then(json => setCategoryItems(json))
    }, [])


    return (
        <div className={componentClass}>
            <div className={componentClass+"_items"}>
                {categoryItems.map(item => (
                    <ItemCard key={item.id} className={componentClass} item={item} addItemToCart={addItemToCart}/>
                ))}
            </div>
        </div>
    )
}

export default CategoryItems;