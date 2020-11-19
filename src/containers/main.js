import { FormTodo } from '../components/forms/form.js';
import { TodoList } from '../components/lists/list.js';

const Main = props => {
    const todos = props.todos;
    let activeTab = props.activeTab;
    let todoFunctions = props.todoFunctions;

    const isCompleted = () => activeTab === 'completed';
    const getTodos = () => {
        let todoList;

        switch (activeTab) {
            case 'active': {
                todoList = todos.filter(t => !t.completed)
                break;
            }
            case 'completed': {
                todoList = todos.filter(t => t.completed)
                break;
            }
            default: {
                todoList = todos;
            }
        }
        return todoList;
    }

    return (
        <main className="w-full flex justify-center">
            <div className="w-6/12">
                {!isCompleted() && <FormTodo addTodo={todoFunctions.addTodo} />}
                <div className="w-8/12 m-auto pt-2">
                    <TodoList todos={getTodos()} allowDelete={isCompleted()} handleToggleCompleted={todoFunctions.toggleTodoCompleted} handleDelete={todoFunctions.deleteTodo} handleDeleteCompleted={todoFunctions.deleteCompleted} />
                </div>
            </div>
        </main>
    );
};

export default Main;