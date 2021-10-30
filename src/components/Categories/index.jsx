import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import "./style.css"

const Category = ({ category }) => {
    const [categoryItem, setCategoryItem] = useState({});

    useEffect(() => {
        console.log(category)
        fetch(`https://fakestoreapi.com/products/category/${category}`)
            .then(res => res.json())
            .then(json => setCategoryItem(categoryItem => categoryItem = json[0]))
    }, [])

    return (

        // <div>Hello</div>
        <Link className="category" to={`/category/${categoryItem.category}`}>
            <img src={categoryItem.image} alt={categoryItem.title} />
            <h3>{categoryItem.category}</h3>
        </Link>
    )
}

const Categories = ({className}) => {
    const componentClass = className;

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
            .then(res => res.json())
            .then(json => setCategories(json))
    }, [])

    

    return (
        <div className={componentClass}>
            <div className={componentClass+"_container"}>
                {categories.map(category => (
                    <Category key={category} category={category.replaceAll(" ", "%20")} />
                ))}
            </div>
        </div>
    )
}

export default Categories;