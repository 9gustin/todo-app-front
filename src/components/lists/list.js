import { ListItem } from "./listItems.js";
import { IconDelete } from "../texts/icons.js";
import { DeleteAllButton } from "../forms/formItems.js";

const TodoList = props => {
    const todos = props.todos;
    const allowDelete = props.allowDelete;
    const handleDelete = props.handleDelete;
    const handleToggleCompleted = props.handleToggleCompleted;
    const handleDeleteCompleted = props.handleDeleteCompleted;

    const getActions = todo => (allowDelete ? <button key={`DeleteButton-${todo.id}`} className="flex items-center" onClick={() => { handleDelete(todo) }}> <IconDelete /> </button> : '');

    return (
        <>
            <ul>
                {todos.map((todo) => (
                    <ListItem key={`ListItem-${todo.id}`} item={todo} actions={getActions(todo)} handleClick={handleToggleCompleted}/>
                ))}
            </ul>
            {allowDelete && todos?.length > 0 && <DeleteAllButton className="mt-5 float-right flex items-center bg-red-600 hover:bg-red-700 text-white text-xs py-2 px-4 rounded" handleClick={handleDeleteCompleted}/>}
        </>
    );
}

export { TodoList };
