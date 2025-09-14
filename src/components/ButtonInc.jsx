import {useState} from "react";

const ButtonInc = () => {
    const [input, setInput] = useState(1);
    const changeInput = (newInput) => {
        setInput(newInput);
    }
    return (
        <div>
            {input>0 &&
                <button onClick={()=>(setInput((prev) => prev-1))}>-</button>
            }
            <input type="number" value={input} placeholder="1?" onChange={(e)=>changeInput(e.target.value)}/>
            <button onClick={()=>(setInput((prev) => prev+1))}>+</button>
        </div>
    )
}

export {ButtonInc};