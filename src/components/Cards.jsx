import { ButtonInc } from "./ButtonInc";

const addToCart = () => {
    // function add element to the cart             FUNCTION TO ADD ELEMENT TO THE CART
}

const Cards = ({data}) => {
    const {title,price,image} = data;//mock title Receive it from data props
    return (
        <div>
            <img src={image} alt="Picture of Item" />
            <div>
                <h3>{title}</h3>
                <p>Price={price}</p>
                <ButtonInc /> 
                <button onClick={()=>addToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export {Cards};