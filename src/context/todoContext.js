import { stringComparator } from '../utils/stringComparator';
import { createContext, useState } from "react";
import Todo from '../models/todo';

const TodosContext = createContext({});

const TodosProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = todo => {
        setTodos(actualTodos => (actualTodos.filter(t => t.id !== todo.id)));
    }

    const deleteCompleted = todo => {
        setTodos(actualTodos => (actualTodos.filter(t => !t.completed)));
    }

    const addTodo = jsonTodo => {
        if (jsonTodo.name && jsonTodo.name.trim() !== '') {

            if (!todos.some(t => stringComparator(t.name, jsonTodo.name))) {
                let todo = new Todo(jsonTodo);
                todo.initAsNew();

                setTodos(actualTodos => [...actualTodos, todo]);
                return true;
            }
        }

        return false;
    }

    const toggleTodoCompleted = todo => {
        setTodos(todos.map(t => {
            if (t.id === todo.id) {
                t.toggleCompleted();
            }
            return t;
        }));
    }

    return <TodosContext.Provider value={{ todos, deleteTodo, deleteCompleted, addTodo, toggleTodoCompleted }}>
        {children}
    </TodosContext.Provider>
}

export { TodosContext, TodosProvider }