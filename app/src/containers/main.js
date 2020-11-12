import {useState} from 'react';
import {FormTodo} from '../components/forms/form';

const Main = props => {
    const [todos, setTodos] = useState(props.todos);

    return (
        <main>
            <FormTodo/>
            
        </main>
    );
};

export default Main;