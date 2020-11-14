import { ListItem } from "./listItems";
import { IconDelete } from "../texts/icons";
import { DeleteAllButton } from "../forms/formItems";

const AllList = (props) => {
    const todos = props.todos;
    const handleToggleCompleted = props.handleToggleCompleted;

    return (
        <ul>
            {todos.map((todo) => (
                <ListItem item={todo} handleClick={handleToggleCompleted}/>
            ))}
        </ul>
    );
};

const ActiveList = (props) => {
    const todos = props.todos;
    const handleToggleCompleted = props.handleToggleCompleted;

    return (
        <ul>
            {todos.filter(todo => !todo.completed).map((todo) => (
                <ListItem item={todo} handleClick={handleToggleCompleted}/>
            ))}
        </ul>
    );
};

const CompletedList = (props) => {
    const todos = props.todos;
    const handleDelete = props.handleDelete;
    const handleToggleCompleted = props.handleToggleCompleted;
    const handleDeleteCompleted = props.handleDeleteCompleted;

    const getActions = todo => (<button onClick={() => { handleDelete(todo) }}> <IconDelete /> </button>);

    return (
        <>
            <ul>
                {todos.filter(todo => todo.completed).map((todo) => (
                    <ListItem item={todo} actions={getActions(todo)} handleClick={handleToggleCompleted}/>
                ))}
            </ul>
            <DeleteAllButton handleClick={handleDeleteCompleted}/>
        </>
    );
};

export { AllList, ActiveList, CompletedList };
