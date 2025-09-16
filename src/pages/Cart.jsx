import { useOutletContext } from "react-router";

const Cart = () => {
    const [cartItems] = useOutletContext(); 
    return <div>
        {
            cartItems.map((data) => {
                return <div key={data.id}>
                    {data.title} {data.price} (qty: {data.quantity})
                </div>;
            })
        }
    </div>
}

export {Cart};