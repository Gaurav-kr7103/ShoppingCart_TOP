import { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

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

    return (
        // iterate in shopping list
        <div>
            {
                shoppingList.map((data) => {
                    return <Cards key={data.id} data={data} />
                })
            }
        </div>
    );
};

export {Shop};