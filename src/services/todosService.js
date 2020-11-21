import config from './config.json';
import Todo from '../models/todo';
import axios from 'axios';

let TodoService = {};

TodoService.getAll = async () => {
    let response = await axios(`${config.URL}/todo`);
    
    if(response.status === 200){
        return response.data?.data?.map(todo => new Todo(todo));
    }

    return null;
}

TodoService.create = async todo => {
    let response = await axios.post(`${config.URL}/todo`, todo.toAPI());

    if(response.status === 201){
        return new Todo(response.data?.data);
    }

    return false;
}

TodoService.update = async todo => {
    let response = await axios.put(`${config.URL}/todo`, todo.toAPI());

    return (response.status === 201);
}

TodoService.delete = async todo => {
    let response = await axios.delete(`${config.URL}/todo/${todo.id}`);

    return (response.status === 200);
}

export default TodoService;