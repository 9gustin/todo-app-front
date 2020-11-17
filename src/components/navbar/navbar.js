import {NavbarItem} from './navbarItems.js';

const Navbar = props => {
    const handleTabChange = props.handleTabChange;
    const tabs = props.tabs; 

    return (
        <nav>
            <ul className="flex">
                {tabs.map(item => (<NavbarItem handleClick={() => {handleTabChange(item.name);}}item={item} key={`NavbarItem-${item.name}`}/>))}
            </ul>
        </nav>
    );
};

export {Navbar};