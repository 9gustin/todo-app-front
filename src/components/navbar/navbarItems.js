const NavbarItem = props => {
    const item = props.item;

    return (
        <li className="mx-6" key={`NavbarItem-${item.name}`}>
            <button className={`text-sm font-semibold text-center w-32 inline-block border rounded py-1 px-3 ${item.selected ? 'bg-blue-600 text-white border-blue-500' : 'hover:border-gray-200 hover:bg-gray-200 border-white'}`} type="button" 
            onClick={props.handleClick}>
                {item.name}
            </button>
        </li>
    );
};

export {NavbarItem};