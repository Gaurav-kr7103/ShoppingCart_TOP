import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";
import { useOutletContext } from "react-router";

const Shop = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartItems, setCartItems] = useOutletContext();
    
    const URL = "https://fakestoreapi.com/products";

    useEffect(()=> {
        const getShoppingCart = async () => {
            try {
                const res = await fetch(URL);
                if (!res.ok) {
                    throw new Error("Unable to Load the Items");
                }
                const data = await res.json();
                const newData = data.map((data_) => {
                    const idx = cartItems.findIndex((item) => item.id === data_.id)
                    const quantity = idx === -1? 0 : cartItems[idx].quantity;
                    data_.quantity = quantity;
                    return;
                });

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
        <div>
            {
                shoppingList.map((data) => {
                    return <Cards 
                        key={data.id} 
                        data={data} 
                        cartItems={cartItems}
                        setCartItems={setCartItems}
                    />
                })
            }
        </div>
    );
};

export {Shop};