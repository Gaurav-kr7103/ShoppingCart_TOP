import {useState} from "react";

const ButtonInc = ({quantity, setQuantity}) => {

    const changeInput = (newVal) => {
        setQuantity(newVal);
    }

    return (
        <div>
            {quantity>0 &&
                <button onClick={()=>(setQuantity((prev) => prev-1))}>-</button>
            }
            <input type="number" value={quantity} placeholder="1?" onChange={(e)=>changeInput(e.target.value)}/>
            <button onClick={()=>(setQuantity((prev) => prev+1))}>+</button>
        </div>
    )
}

export {ButtonInc};