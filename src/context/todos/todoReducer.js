//Reducer use the actions and modify the state in base of this

import { UPDATE_TODO, ADD_TODO, DELETE_COMPLETED, DELETE_TODO, SET_TODOS } from './todoActions';

const todoReducer = (state, action) => {
    switch (action.type) {
        case ADD_TODO: return {
            ...state, todos: [...state.todos, action.payload]
        };
        case UPDATE_TODO: return {
            ...state, todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo)
        };
        case DELETE_COMPLETED: return {
            ...state, todos: state.todos.filter(t => !t.completed)
        };
        case DELETE_TODO: return {
            ...state, todos: state.todos.filter(t => t.id !== action.payload?.id)
        };
        case SET_TODOS: return {
            ...state, todos: action.payload
        };
        default: return state;
    }
}

export default todoReducer;