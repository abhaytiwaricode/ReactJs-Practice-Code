import './App.css';
import Lottery from './components/Lottery.jsx';

function App() {
  return (
    <>
      <Lottery n={3} winningSum={15} />
    </>
  );
}

export default App;
