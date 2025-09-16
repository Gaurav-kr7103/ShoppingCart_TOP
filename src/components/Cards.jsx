import { ButtonInc } from "./ButtonInc";
import {useState} from 'react';
import { useOutletContext } from "react-router";

const Cards = ({data}) => {
    const {title,price,image} = data;//mock title Receive it from data props
    const [quantity, setQuantity] = useState(1); 
    const [cartItems, setCartItems] = useOutletContext();

    const addToCart = () => {
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
        setCartItems(items);
    }
    return (
        <div>
            <img src={image} alt="Picture of Item" />
            <div>
                <h3>{title}</h3>
                <p>Price={price}</p>
                <ButtonInc quantity={quantity} setQuantity={setQuantity}/>
                <button onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export {Cards};