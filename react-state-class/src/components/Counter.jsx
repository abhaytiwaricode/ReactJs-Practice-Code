import {useState} from "react";

export default function Counter() {
    let [count, setCount] = useState(0);    //initialization
    console.log('component is rendered!');
    console.log(`count = ${count}`);

let inCount = () => {
    setCount(count+1);
    console.log(`inCount = ${count}`);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>
    );
}