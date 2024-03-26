import { useState, useEffect } from 'react';

export default function Counter() {
  let [countx, setCountx] = useState(0);
  let [county, setCounty] = useState(0);

  let inCountx = () => {
    setCountx((currCount) => currCount + 1);
  };

  let inCounty = () => {
    setCounty((currCount) => currCount + 1);
  };

  useEffect(
    function temp() {
      console.log('this is a side-effect');
    },
    [countx]
  );

  return (
    <div>
      <h3>Countx = {countx}</h3>
      <button onClick={inCountx}>Count +1</button>
      <br />
      <br />
      <h3>County = {county}</h3>
      <button onClick={inCounty}>Count +1</button>
    </div>
  );
}
