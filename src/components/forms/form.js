import { useState } from 'react';
import Todo from '../../models/todo.js';
import {AddButton, TextInput} from './formItems.js';

const FormTodo = props => {
    const addTodo = props.addTodo;
    const [todo, setTodo] = useState(new Todo());
    
    const handleSubmit = evt => {
        evt.preventDefault();
        let result = addTodo(todo);

        if(result) setTodo(new Todo());
        else alert('mm vs desis')
    }

    const handleInputChange = evt => {
        let changedTodo = {...todo, name: evt.target.value};
        setTodo(changedTodo);
    }

    return (
        <form className="text-center" onSubmit={handleSubmit}>
            <TextInput placeholder="add details" handleChange={handleInputChange} value={todo.name}/>
            <AddButton type="submit"/>
        </form>
    );
};

export {FormTodo};