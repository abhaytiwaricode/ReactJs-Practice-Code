import './App.css';
import ProductTab from './components/ProductTab.jsx';
import MsgBox from "./components/MsgBox.jsx";

function App() {
    return (
        <>
            <MsgBox userName="abhay" textColor="yellow" />
            <MsgBox userName="sandeep" textColor="blue" />
            <ProductTab />
        </>
    );
}

export default App;
