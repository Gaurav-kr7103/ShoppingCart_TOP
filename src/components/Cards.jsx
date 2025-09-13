import { ButtonInc } from "./ButtonInc";

const addToCart = () => {
    // function add element to the cart             FUNCTION TO ADD ELEMENT TO THE CART
}

const Cards = ({data}) => {
    const title = "Title";
    return (
        <div>
            <img src="" alt="" />
            <div>
                <h3>{title}</h3>
                <ButtonInc /> 
                <button onClick={()=>addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export {Cards};