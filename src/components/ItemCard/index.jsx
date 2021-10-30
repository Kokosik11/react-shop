import { Link } from "react-router-dom";


const ItemCard = ({className, addItemToCart, item}) => {
    const componentClass = className

    return (
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
    )
}

export default ItemCard;