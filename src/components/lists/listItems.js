const ListItem = props => {
    const item = props.item;
    const actions = props.actions;

    return (
        <li>
            {item}
            {props.actions}
        </li>
    );
};

export {ListItem};