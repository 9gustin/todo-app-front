import { FormTodo } from '../components/forms/form.js';
import { TodoList } from '../components/lists/list.js';

const Main = props => {
    const todos = props.todos;
    let activeTab = props.activeTab;
    let todoFunctions = props.todoFunctions;

    const getTodos = () => {
        let todoList = activeTab.isAll() ? todos : todos.filter(t => t.completed === activeTab.isCompleted());
        return todoList;
    }

    return (
        <main className="w-full flex justify-center">
            <div className="w-6/12">
                {!activeTab.isCompleted() && <FormTodo addTodo={todoFunctions.addTodo} />}
                <div className="w-8/12 m-auto pt-2">
                    <TodoList todos={getTodos()} allowDelete={activeTab.isCompleted()} handleToggleCompleted={todoFunctions.toggleTodoCompleted} handleDelete={todoFunctions.deleteTodo} handleDeleteCompleted={todoFunctions.deleteCompleted} />
                </div>
            </div>
        </main>
    );
};

export default Main;