import { useMemo, useState } from "react";
import { useOutletContext} from "react-router";

const ShopCards = ({data}) => {
    const {title, price, image} = data;
    // const [present, setPresent] = useState(false);
    const [cartItems, setCartItems] = useOutletContext();
    const [quantity, setQuantity] = useState(() => {
        const idx = cartItems.findIndex((item) => item.id === data.id);
        if (idx == -1)
            return 1;
        else {
            return cartItems[idx].quantity;
        }
    });
    // const [input, setInput] = useState()
    

    const isPresentInCart = useMemo(() => {
        const idx = cartItems.findIndex((item) => item.id === data.id);
        return idx;
    }, [cartItems]);

    const addToCart = () => {
        const newItems = [...cartItems];
        const data_ = {...data};
        data_.quantity = quantity;
        newItems.push(data_);
        setCartItems(newItems);
    }

    const removeFromCart = () => {
        const idx = isPresentInCart;
        const newItems = [...cartItems];
        newItems.splice(idx, 1);
        setCartItems(newItems);
    }

    const effectQuantity = (operator) => {
        const prevQty = quantity;
        let inc = false;
        if (operator === '+') {
            setQuantity(prevQty + 1);
            inc = true;
        } else {
            setQuantity(prevQty - 1);
        }
        const idx = isPresentInCart;
        if (idx !== -1) {
            const newItems = [...cartItems];
            newItems[idx].quantity = prevQty + (inc?1 : -1);
            setCartItems(newItems);
        }
    }

    const handleInputChange = (event) => {
        console.log(event);
        const newQty = Math.max(Number(event.target.value), 1);
        setQuantity(newQty);

        const idx = isPresentInCart;
        if (idx !== -1) {
            const newItems = [...cartItems];
            newItems[idx].quantity = newQty;
            setCartItems(newItems);
        }
    }

    return (
        <div>
            <img src={image} alt={title} />
            <div>
                <h3>{title}</h3>

                {
                    quantity > 1 && 
                        <button onClick={()=>(effectQuantity('-'))}>-</button>
                }
                <input type="number" 
                    value={quantity} placeholder="Enter Quantity" 
                    min="1" 
                    onChange={(e)=> {handleInputChange(e)}}/>

                <button onClick={()=>(effectQuantity('+'))}>+</button>

                <p>Price={price}</p>
                {
                    isPresentInCart === -1 ? (
                        <button onClick={addToCart}>Add To Cart</button>
                    ) : (
                        <button onClick={removeFromCart}>Remove From Cart</button>
                    )
                }
            </div>
        </div>
    )
}

export {ShopCards};   