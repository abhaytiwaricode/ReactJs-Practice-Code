import { useState } from 'react';

export default function Form() {
  let [name, setName] = useState('');

  let handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form>
      <input
        type="text"
        placeholder="name"
        value={name}
        onChange={handleNameChange}
      />
      <br />
      <br />
      <button>Submit</button>
    </form>
  );
}
