import {useState} from "react";

const ButtonInc = () => {
    const [input, setInput] = useState(null);
    const changeInput = (newInput) => {
        setInput(newInput);
    }
    return (
        <div>
            <button>+</button>
            <input type="number" value={1} placeholder="1?" onChange={()=>changeInput}/>
            <button>-</button>
        </div>
    )
}

export {ButtonInc};