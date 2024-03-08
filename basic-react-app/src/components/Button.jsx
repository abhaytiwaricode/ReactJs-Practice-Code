function  printHello() {
    console.log("Hello!")
}

function  printBye() {
    console.log("Bye!")
}

function  printClick() {
    console.log("Double Clicked!")
}

export default function Button() {
    return (
        <div>
            <button onClick={printHello}>Click me!</button>
            <p onMouseOver={printBye}>Hover Over me!</p>
            <button onDoubleClick={printClick}>Double Click me!</button>
        </div>
    );
}