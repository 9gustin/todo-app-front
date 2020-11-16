import {useState} from 'react';

let todoList = [
    { id: 1, name: 'Learn react', completed: true },
    { id: 2, name: 'Love mate', completed: true },
    { id: 3, name: 'other todo', completed: false }
];

const [todos, setTodos] = useState(todoList);

const addTodo = todo => {
    let todos = [...todos, todo];
    setTodos(todos);
}

const toggleCompleted = todo => {
    let todos = todos.map(t => {
        if (t.id === todo.id) t.completed = !t.completed;

        return t;
    })
}

const deleteTodo = todo => {
    let todos = todos.filter(t => t.id !== todo.id);
    setTodos(todos);
}

const deleteCompleted = () => {
    let todos = todos.filter(t => !t.completed);
    setTodos(todos);
}