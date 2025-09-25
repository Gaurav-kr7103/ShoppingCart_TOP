import { useEffect, useState } from "react";
import { ShopCards } from "../components/ShopCards"
import styles from "./Shop.module.css";

const Shop = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    const URL = "https://fakestoreapi.com/products";

    useEffect(()=> {
        const getShoppingCart = async () => {
            try {
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error("Unable to Load the Items");
                }
                const data = await res.json();
                console.log(data);
                setError(null);
                setShoppingList(data);
            } catch (error) {
                setError(error.message);
            }
            finally {
                setLoading(false);
            }
        }
        getShoppingCart();
        // return function
    }, []);

    if (error) {
        return <div>{error}</div>
    } else if (loading) {
        return (<div>
            <h2>Loading..</h2>
            <p>Please be patient</p>
        </div>);
    }

    // const [cartItems, setCartItems] = useOutletContext();
    
    return (
        // iterate in shopping list
        <>
            {/* <div>
                
            </div> */}
            <div className={styles.cards}>
                {
                    shoppingList.map((data) => {
                        return <ShopCards 
                            key={data.id} 
                            data={data}
                        />
                    })
                }
            </div>
        </>
    );
};

export {Shop};