
import "./style.css";

const Cart = ({ removeItemFromCart, className, items }) => {
    const componentClass = className;

    console.log(items)
    
    return (
        <div className={componentClass}>
            <div className={componentClass+"_container"}>
                {items.map((item, index) => (
                    <div className={componentClass+"_row"} key={index}>
                        <div className={componentClass+"_info"}>
                            <div className={componentClass+"_image"}>
                                <img src={item.image} alt={item.title} />
                            </div>
                            <div className={componentClass+"_title"}>{item.title}</div>
                            <div className={componentClass+"price"}>{item.price}</div>
                        </div>

                        <button onClick={() => removeItemFromCart(index)} className={componentClass+"_remove"}>x</button>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;