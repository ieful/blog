import React, {useState} from "react";

function MyButton() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>you clicked me {count} 次</button>
    )
}

export default MyButton;