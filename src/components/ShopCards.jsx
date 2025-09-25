import styles from "./ShopCards.module.css";
import { useMemo, useState } from "react";
import { useOutletContext } from "react-router";

const ShopCards = ({ data }) => {
    const { title, price, image } = data;
    const [cartItems, setCartItems] = useOutletContext();
    const [quantity, setQuantity] = useState(() => {
        const idx = cartItems.findIndex((item) => item.id === data.id);
        return idx === -1 ? 1 : cartItems[idx].quantity;
    });

    const isPresentInCart = useMemo(() => {
        return cartItems.findIndex((item) => item.id === data.id);
    }, [cartItems]);

    const addToCart = () => {
        const newItems = [...cartItems];
        const data_ = { ...data, quantity };
        newItems.push(data_);
        setCartItems(newItems);
    };

    const removeFromCart = () => {
        const newItems = [...cartItems];
        newItems.splice(isPresentInCart, 1);
        setCartItems(newItems);
    };

    const effectQuantity = (operator) => {
        const newQty = operator === "+" ? quantity + 1 : Math.max(quantity - 1, 1);
        setQuantity(newQty);

        if (isPresentInCart !== -1) {
            const newItems = [...cartItems];
            newItems[isPresentInCart].quantity = newQty;
            setCartItems(newItems);
        }
    };

    const handleInputChange = (event) => {
        const newQty = Math.max(Number(event.target.value), 1);
        setQuantity(newQty);
        if (isPresentInCart !== -1) {
            const newItems = [...cartItems];
            newItems[isPresentInCart].quantity = newQty;
            setCartItems(newItems);
        }
    };

    return (
        <div className={styles.card}>
            <img src={image} alt={title} />
            <h3>{title}</h3>

            <div className={styles.controls}>
                {quantity > 1 && <button onClick={() => effectQuantity("-")}>-</button>}
                <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={handleInputChange}
                />
                <button onClick={() => effectQuantity("+")}>+</button>
            </div>

            <p className={styles.price}>₹{price}/each</p>

            {isPresentInCart === -1 ? (
                <button className={`${styles.actionBtn} ${styles.add}`} onClick={addToCart}>
                    Add To Cart
                </button>
            ) : (
                <button className={`${styles.actionBtn} ${styles.remove}`} onClick={removeFromCart}>
                    Remove From Cart
                </button>
            )}
        </div>
    );
};

export { ShopCards };
