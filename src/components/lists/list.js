import { ListItem } from "./listItems";
import { IconDelete } from "../texts/icons";
import { DeleteAllButton } from "../forms/formItems";

const AllList = (props) => {
    const todos = props.todos;

    return (
        <ul>
            {todos.map((todo) => (
                <ListItem item={todo} />
            ))}
        </ul>
    );
};

const ActiveList = (props) => {
    const todos = props.todos;

    return (
        <ul>
            {todos.filter(todo => !todo.completed).map((todo) => (
                <ListItem item={todo} />
            ))}
        </ul>
    );
};

const CompletedList = (props) => {
    const todos = props.todos;
    const handleDelete = props.handleDelete;
    const handleDeleteCompleted = props.handleDeleteCompleted;

    const getActions = todo => (<button onClick={() => { handleDelete(todo) }}> <IconDelete /> </button>);

    return (
        <>
            <ul>
                {todos.filter(todo => todo.completed).map((todo) => (
                    <ListItem item={todo} actions={getActions(todo)} />
                ))}
            </ul>
            <DeleteAllButton handleClick={handleDeleteCompleted}/>
        </>
    );
};

export { AllList, ActiveList, CompletedList };
