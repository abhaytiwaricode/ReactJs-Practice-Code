import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "sample task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4() }];
        });
        setNewTodo("");
    };
    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
    };

    return (
        <div>
            <input
                type="text"
                placeholder="add a task"
                value={newTodo}
                onChange={updateTodoValue}
            />{" "}
            &nbsp;
            <button onClick={addNewTask}>Add Task</button>
            <br />
            <br />
            <hr />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span>{todo.task}</span>
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
