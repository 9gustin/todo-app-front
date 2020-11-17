import {CheckboxInput} from '../forms/formItems';

const ListItem = props => {
    const item = props.item;
    const handleClick = props.handleClick;
    const actions = props.actions;

    return (
        <li className="px-4 py-2 flex items-center justify-between" key={`ListItem-${item.id}`}>
            <span className="flex items-center">
                <CheckboxInput className="mr-3" id={`checkbox-${item.id}`} handleChange={() => handleClick(item)} checked={item.completed}/>
                <label className={`font-medium ${item.completed ? 'line-through' : ''}`} htmlFor={`checkbox-${item.id}`} >{item.name}</label>
            </span>
            
            {actions}
        </li>
    );
};

export {ListItem};