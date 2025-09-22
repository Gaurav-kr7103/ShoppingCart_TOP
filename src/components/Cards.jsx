import { ButtonInc } from "./ButtonInc";
import {useState} from 'react';
import { useOutletContext } from "react-router";

const Cards = ({data}) => {
    const {title,price,image} = data;//mock title Receive it from data props
    const [quantity, setQuantity] = useState(data.quantity); 
    const [buy, setBuy] = useState(false);
    const [cartItems, setCartItems] = useOutletContext();

    const addToCart = () => {
        
        if (quantity === 0) {
            removeFromCart();
        }
        // function add element to the cart             FUNCTION TO ADD ELEMENT TO THE CART
        let items = [];
        if (cartItems.length !== 0)
            items = [...cartItems];

        const idx = items.findIndex((item) => (item.id === data.id));
        if (idx === -1) {
            const data_ = {...data};
            data_.quantity = quantity;
            items.push(data_);
        } else {
            items[idx].quantity = quantity;
        }
        console.log("item add");
        setCartItems(items);
    
    }

    function removeFromCart () {
        const idx = cartItems.findIndex(items => items.id === data.id) 
        const items = [...cartItems];
        items.splice(idx, 1);
        setCartItems(items);
    }

    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>
                <p>Price={price}</p>
                <ButtonInc quantity={quantity} setQuantity={setQuantity} addToCart={addToCart} buy={buy}/>
                {
                    (buy === false || data.quantity!=0) &&
                        <button onClick={() => { 
                            setBuy(true);
                            addToCart(); 
                        }}>Add to Cart</button>
                    || <button onClick={() => {
                        setBuy(false);
                        removeFromCart();
                    }}>Remove From Cart</button>   
                    // , setBuy(false)setBuy(true),
                }
            </div>
        </div>
    )
}

export {Cards};