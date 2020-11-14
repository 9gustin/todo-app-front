import { useState } from "react";
import { ListItem } from "./listItems";

const AllList = (props) => {
    const [todos, setTodos] = useState(props.todos);

    return (
        <ul>
            {todos.map((todo) => (
                <ListItem item={todo} />
            ))}
        </ul>
    );
};

const ActiveList = (props) => {
    const [todos, setTodos] = useState(props.todos);

    return (
        <ul>
            {todos.filter(todo => !todo.completed).map((todo) => (
                <ListItem item={todo} />
            ))}
        </ul>
    );
};

const CompletedList = (props) => {
    const [todos, setTodos] = useState(props.todos);

    return (
        <ul>
            {todos.filter(todo => todo.completed).map((todo) => (
                <ListItem item={todo} />
            ))}
        </ul>
    );
};

export { AllList, ActiveList, CompletedList };
