import { FormTodo } from '../components/forms/form.js';
import { ActiveList, CompletedList, AllList } from '../components/lists/list.js';

const Main = props => {
    const todos = props.todos;
    let activeTab = props.activeTab;
    let todoFunctions = props.todoFunctions;
    const showTodoForm = () => !(activeTab === 'completed')

    const getTodoList = () => {
        let todoList;
        switch (activeTab) {
            case 'active': {
                todoList = (<ActiveList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted} />)
                break;
            }
            case 'completed': {
                todoList = (<CompletedList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted} handleDelete={todoFunctions.deleteTodo} handleDeleteCompleted={todoFunctions.deleteCompleted} />)
                break;
            }
            default: {
                todoList = (<AllList todos={todos} handleToggleCompleted={todoFunctions.toggleTodoCompleted} />)
            }
        }

        return todoList;
    }

    return (
        <main className="w-full flex justify-center">
            <div className="w-6/12">
                {showTodoForm() && <FormTodo addTodo={todoFunctions.addTodo} />}
                <div className="w-8/12 m-auto pt-2">
                    {getTodoList()}
                </div>

            </div>
        </main>
    );
};

export default Main;