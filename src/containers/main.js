import { useState } from 'react';
import { FormTodo } from '../components/forms/form';
import {ActiveList, CompletedList, AllList} from '../components/lists/list';

const Main = props => {
    const [todos, setTodos] = useState(props.todos);
    let activeTab = props.activeTab;

    const getTodoList = () => {
        let todoList;
        switch (activeTab) {
            case 'active': {
                todoList = (<ActiveList todos={todos}/>)
                break;
            }
            case 'completed': {
                todoList = (<CompletedList todos={todos}/>)
                break;
            }
            default: {
                todoList = (<AllList todos={todos}/>)
            }
        }

        return todoList;
    }

    return (
        <main>
            <FormTodo />
            {getTodoList()}
        </main>
    );
};

export default Main;