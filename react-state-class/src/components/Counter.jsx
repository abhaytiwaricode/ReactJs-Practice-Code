import { useState, useEffect } from 'react';

export default function Counter() {
  let [count, setCount] = useState(0);

  let inCount = () => {
    setCount((currCount) => {
      return currCount + 1;
    });
  };

  useEffect(function temp() {
    console.log('this is a side-effect');
  });

  return (
    <div>
      <h3>Count = {count}</h3>
      <button onClick={inCount}>Count +1</button>
    </div>
  );
}
