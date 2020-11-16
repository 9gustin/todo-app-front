import {NavbarItem} from './navbarItems';

const Navbar = props => {
    const handleTabChange = props.handleTabChange;
    const items = [
        {name: 'All', handleClick: () => {handleTabChange('all')}},
        {name: 'Active', handleClick: () => {handleTabChange('active')}},
        {name: 'Completed', handleClick: () => {handleTabChange('completed')}}
    ];

    return (
        <nav>
            <ul>
                {items.map(item => (<NavbarItem item={item} key={`NavbarItem-${item.name}`}/>))}
            </ul>
        </nav>
    );
};

export {Navbar};