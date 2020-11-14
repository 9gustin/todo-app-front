const NavbarItem = props => {
    const item = props.item;

    return (
        <li>
            <button type="button" onClick={item.handleClick}>
                {item.name}
            </button>
        </li>
    );
};

export {NavbarItem};