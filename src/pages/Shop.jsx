import { useEffect, useState } from "react";

const Shop = () => {
    const [shoppingList, setShoppingList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const URL = "";

    const getShoppingCart = useEffect(()=> {
        const getShoppingCart = async () => {
            try {
                const res = await fetch(url);
                if (!res.ok) {
                    throw new Error("Unable to Load the Items");
                }
                const data = await res.json();
                setLoading(false);
                setError(null);
                setShoppingList(/*data...*/);
            } catch {
                setError(error);
                setLoading(false);
            } //I dont think that Finally is necessary
            /*
            finally {
                setLoading(true);
            }*/
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
            {shoppingList.map((data) => (
                <Cards data={data} />
            ))}
        </div>
    );
};

export {Shop};