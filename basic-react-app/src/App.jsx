import './App.css';
import Title from './components/Title.jsx';

function Description() {
  return <p>I am the Description!</p>;
}

function App() {
  return (
    <>
      <Title />
      <Description />
    </>
  );
}

export default App;
