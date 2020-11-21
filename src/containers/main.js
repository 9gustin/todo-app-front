import { useContext } from 'react';
import { FormTodo } from '../components/forms/form.js';
import { TodoList } from '../components/lists/list.js';
import TodosContext  from '../context/todos/todoContext';

const Main = props => {
    const { todos, toggleTodoCompleted, deleteTodo, deleteCompleted } = useContext(TodosContext);
    let activeTab = props.activeTab;

    const getTodos = () => {
        let todoList = activeTab.isAll() ? todos : todos.filter(t => t.completed === activeTab.isCompleted());
        return todoList;
    }

    return (
        <main className="w-full flex justify-center">
            <div className="w-6/12">
                {!activeTab.isCompleted() && <FormTodo />}
                <div className="w-8/12 m-auto pt-2">
                    <TodoList todos={getTodos()} allowDelete={activeTab.isCompleted()} handleToggleCompleted={toggleTodoCompleted} handleDelete={deleteTodo} handleDeleteCompleted={deleteCompleted} />
                </div>
            </div>
        </main>
    );
};

export default Main;