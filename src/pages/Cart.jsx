import { useOutletContext } from "react-router";
import { useMemo } from "react";
import styles from "./Cart.module.css";
import {Link} from "react-router";

const Cart = () => {
    const [cartItems, setCartItems] = useOutletContext();
    const overAllPrice = useMemo(() => {
        const price = cartItems.reduce((sum, item) => (sum + item.price*item.quantity), 0);
        return price;
    },[cartItems])

    const removeFromCart = (item) => {
        const cItems = [...cartItems];
        const idx = cItems.findIndex(cItem => cItem.id === item.id)
        if (idx === -1)
            return;
        cItems.splice(idx, 1);
        setCartItems(cItems);
    }

    const increaseQuantity = (item) => {
        const cItems = [...cartItems];
        const idx = cItems.findIndex(cItem => cItem.id === item.id)
        if (idx === -1)
            return;
        cItems[idx].quantity++;
        setCartItems(cItems);
    }

    const decreaseQuantity = (item) => {
        const cItems = [...cartItems];
        const idx = cItems.findIndex(cItem => cItem.id === item.id)
        if (idx === -1)
            return;
        cItems[idx].quantity--;
        if (cItems[idx].quantity === 0) {
            removeFromCart(item);
            return;
        }
        setCartItems(cItems);
    }
    
    if (cartItems.length === 0) {
        return (
            <div className={styles.emptyCart}>
                <img src="emptyCart.png" alt="" />
                <div>
                    <h2>
                        Empty Cart!
                    </h2>
                    <h3>Looks like the Cart is Empty. <br />Why Don't you 👉 
                        <Link to="/Shop">Shop IT</Link>
                    </h3>
                </div>
            </div>
        )
    }

    return (  
        <>
        <h1 style={{textAlign : "center",
                    paddingTop : "20px",
                    paddingBottom : "20px"
        }}>
            Your Cart
        </h1>
        <div className={styles.nonEmpty}>
            {
                cartItems.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.image} alt="" />
                            <div className={styles.quantity}>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>
                                <div>
                                    <p>Item Price = ₹{item.price}</p>
                                    <p>Items Quantity = {item.quantity}</p>
                                    <div>Total Price = {item.price * item.quantity}</div>
                                    <div>
                                        <button onClick={() => decreaseQuantity(item)}>-</button>
                                        <button onClick={()=>increaseQuantity(item)}>+</button>
                                        <button onClick={()=>(removeFromCart(item))}>Remove From Cart</button>
                                    </div>
                                </div>    
                            </div>
                        </div>
                    );
                })
            }
        </div>

        <div>
            {overAllPrice}
        </div>
        </>
    )
}

export {Cart};