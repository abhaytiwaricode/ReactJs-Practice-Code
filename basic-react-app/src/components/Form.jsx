function handleSubmitForm(event) {
    event.preventDefault();
    console.log("form was submitted");
}

export default function Form() {
    return (
        <form onSubmit={handleSubmitForm}>
            <input placeholder="write something"/>
            <button>Submit</button>
        </form>
    );
}