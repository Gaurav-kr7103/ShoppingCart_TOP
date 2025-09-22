import { useOutletContext } from "react-router";


const Cart = () => {
    // const [quantity, setQuantity] = useState(1);
    const [cartItems, setCartItems] = useOutletContext();
    
    return <div className="cartCards">
        {
            cartItems.map((item) => {
                return (
                    <div key={item.id}>
                        <div>
                            <img src={item.image} alt="" />
                        </div>
                        {item.title} {item.price} (qty: {item.quantity})
                    </div>
                );
            })
        }
    </div>
}

export {Cart};