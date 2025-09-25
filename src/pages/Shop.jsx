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

    const handleChange = (e) => {
        if(e.target.value === "inc") {
            sortByIncPrice();
        } else if(e.target.value === "dec") {
            sortByDecPrice();
        }
    }

    return (
        // iterate in shopping list
        <>
            <div className={styles.dropDown}>
                <label htmlFor="sortBy">Sort By</label>
                <select name="sortBy" id="sortBy" onChange={handleChange}>
                    <option value="inc">Price(increasing)</option>
                    <option value="dec">Price(decreasing)</option>
                </select>
            </div>
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

    function sortByIncPrice() {
        const list = [...shoppingList];
        list.sort((a, b) => a.price - b.price);
        setShoppingList(list);
    }
    function sortByDecPrice() {
        const list = [...shoppingList];
        list.sort((a, b) => b.price - a.price);
        setShoppingList(list);
    }

};

export {Shop};