import { FormTodo } from '../components/forms/form';
import {ActiveList, CompletedList, AllList} from '../components/lists/list';

const Main = props => {
    const todos = props.todos;
    let activeTab = props.activeTab;
    let todoFunctions = props.todoFunctions;
    
    const getTodoList = () => {
        let todoList;
        switch (activeTab) {
            case 'active': {
                todoList = (<ActiveList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted}/>)
                break;
            }
            case 'completed': {
                todoList = (<CompletedList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted} handleDelete={todoFunctions.deleteTodo} handleDeleteCompleted={todoFunctions.deleteCompleted}/>)
                break;
            }
            default: {
                todoList = (<AllList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted}/>)
            }
        }

        return todoList;
    }

    return (
        <main>
            <FormTodo addTodo={todoFunctions.addTodo}/>
            {getTodoList()}
        </main>
    );
};

export default Main;