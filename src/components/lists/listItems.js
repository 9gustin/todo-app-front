import {CheckboxInput} from '../forms/formItems';

const ListItem = props => {
    const item = props.item;
    const handleClick = props.handleClick;
    const actions = props.actions;

    return (
        <li key={`ListItem-${item.id}`}>
            <CheckboxInput id={`checkbox-${item.id}`} handleChange={() => handleClick(item)} checked={item.completed}/>
            <label htmlFor={`checkbox-${item.id}`} >{item.name}</label>
            {actions}
        </li>
    );
};

export {ListItem};