import { useEffect, useState } from 'react';

export default function Joker() {
  let [joke, setJoke] = useState({});

  const URL = 'https://official-joke-api.appspot.com/random_joke';

  useEffect(() => {
    const getFirstJoke = async () => {
      let response = await fetch(URL);
      let jsonResponse = await response.json();
      setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
    };
    getFirstJoke();
  }, []);

  const getNewJoke = async () => {
    let response = await fetch(URL);
    let jsonResponse = await response.json();
    setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline });
  };

  return (
    <div>
      <h1>Joker!</h1>
      <h3>{joke.setup}</h3>
      <h3>{joke.punchline}</h3>
      <button onClick={getNewJoke}>New Joke!</button>
    </div>
  );
}
