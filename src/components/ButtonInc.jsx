import {useState} from "react";

const ButtonInc = ({quantity, setQuantity, addToCart, buy}) => {

    const changeInput = (newVal) => {
        let val = Math.floor(Number(newVal));
        if (isNaN(val)) val = 0;
        val = Math.max(0, val);

        setQuantity(val);
        if (buy)
            addToCart();
    }

    return (
        <div>
            {quantity>1 &&
                <button onClick={()=>{setQuantity((prev) => prev-1);/* addToCart()*/} }>-</button>
            }
            <input type="number" value={quantity} placeholder="Enter Quantity" onChange={(e)=>changeInput(e.target.value)}/>
            <button onClick={()=>{setQuantity((prev) => prev+1);/* addToCart()*/}}>+</button>
        </div>
    )
}

export {ButtonInc};