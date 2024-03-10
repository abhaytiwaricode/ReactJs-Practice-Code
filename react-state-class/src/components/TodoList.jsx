import {useState} from "react";

export default function TodoList() {
    let [todos, setTodos] = useState(['code']);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, newTodo]);
        setNewTodo("");
    }
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    return (<div>
            <input type="text" placeholder="add a task" value={newTodo} onChange={updateTodoValue}/> &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br/><br/>
            <hr/>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (<li>{todo}</li>))}
            </ul>
        </div>);
}