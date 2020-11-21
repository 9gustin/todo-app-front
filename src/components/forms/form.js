import { useState, useContext, useRef } from 'react';
import Todo from '../../models/todo.js';
import {AddButton, TextInput} from './formItems.js';
import TodosContext from '../../context/todos/todoContext';

const FormTodo = props => {
    const {addTodo} = useContext(TodosContext); 
    const [todo, setTodo] = useState(new Todo());
    const inputTodo = useRef(null);
    
    const handleSubmit = async evt => {
        evt.preventDefault();
        let result = await addTodo(todo);

        if(result) setTodo(new Todo());
        else alert('mm vs desis')
    }

    const handleInputChange = () => {  
        let changedTodo = {...todo, name: inputTodo.current.value};
        setTodo(changedTodo);
    }

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <TextInput reference={inputTodo} placeholder="add details" handleChange={handleInputChange} value={todo.name}/>
            <AddButton type="submit"/>
        </form>
    );
};

export {FormTodo};