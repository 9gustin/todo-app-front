//TodosProvider is exposed to the components, and it has the functions for the components modify state

import { stringComparator } from '../../utils/stringComparator';
import {useEffect, useReducer} from 'react';
import Todo from '../../models/todo';
import TodoService from '../../services/todosService';
import TodosContext from './todoContext';
import todoReducer from './todoReducer';
import { UPDATE_TODO, ADD_TODO, DELETE_COMPLETED, DELETE_TODO, SET_TODOS } from './todoActions';

const TodosProvider = ({ children }) => {
    const initialState = {todos: []};

    const [todosState, dispatchTodos] = useReducer(todoReducer, initialState);

    const deleteTodo = todo => {
        dispatchTodos({type: DELETE_TODO, payload: todo})

        TodoService.delete(todo)
        .catch(() => {
            alert('F');
            dispatchTodos({type: ADD_TODO, payload: todo})
        })
    }

    const deleteCompleted = () => {
        let completedTodos = todosState.todos.filter(t => t.completed);
        dispatchTodos({type: DELETE_COMPLETED});

        Promise.all(
            completedTodos.map(todo => TodoService.delete(todo))
        )
        .catch(() => {
            alert('F');
            completedTodos.forEach(todo => dispatchTodos({type: ADD_TODO, payload: todo}))
        })
    }

    const addTodo = async jsonTodo => {
        if (jsonTodo.name && jsonTodo.name.trim() !== '') {

            if (!todosState.todos.some(t => stringComparator(t.name, jsonTodo.name))) {
                let todo = new Todo(jsonTodo);
                todo.initAsNew();

                let result = await TodoService.create(todo);
                if (result) dispatchTodos({type: ADD_TODO, payload: result});

                return result;
            }
        }

        return false;
    }

    const toggleTodoCompleted = todo => {
        todo.toggleCompleted();
        dispatchTodos({type: UPDATE_TODO, payload: todo})

        TodoService.update(todo)
        .catch(()=> {
            alert('F')
            todo.toggleCompleted();
            dispatchTodos({type: UPDATE_TODO, payload: todo})
        })
    }

    useEffect(() => {
        TodoService.getAll()
            .then(dbTodos => dbTodos && dispatchTodos({type: SET_TODOS, payload: dbTodos}))
    }, []);

    return <TodosContext.Provider value={{ todos:todosState.todos, deleteTodo, deleteCompleted, addTodo, toggleTodoCompleted }}>
        {children}
    </TodosContext.Provider>
}


export default TodosProvider;