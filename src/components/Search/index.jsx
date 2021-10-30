import { useState, useEffect, useRef } from 'react'
import { Link } from "react-router-dom";

import "./style.css";

const Search = ({ className }) => {
    const componentClass = className;

    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    // const searchRef = useRef(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => { 
                setItems(json)
            })
    }, [])

    const searchData = (data) => {
        // console.log(data)
        const value = data.toLowerCase()
        const result = items.filter(item => {
            console.log(item.title.toLowerCase().search(value))
            return item.title.toLowerCase().search(value) !== -1
        })

        if(value) setFilteredItems(result.slice(0, 7));
        else setFilteredItems([])
    } 

    // const handleSearchOnBlur = () => {
    //     setFilteredItems([]);
    // }

    return (
        <div className={componentClass}>
            <input onChange={e => searchData(e.target.value)} className={componentClass+"_field"} type="text" placeholder="Поиск..."/>
            <div className={componentClass+"_filtered"}>
                {filteredItems.map(item => (
                    <Link key={item.id} to={`/item/${item.id}`} className={componentClass+"_row"}>
                        <div className={componentClass+"_image"}>
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div>{item.title}</div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Search;