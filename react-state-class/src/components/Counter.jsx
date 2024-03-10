import {useState} from "react";

export default function Counter() {
    let [count, setCount] = useState(0);    //initialization

    let inCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });

        console.log(`inCount = ${count}`);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    );
}