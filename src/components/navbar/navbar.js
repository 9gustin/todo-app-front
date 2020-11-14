import {NavbarItem} from './navbarItems';

const Navbar = props => {
    const items = [
        {name: 'All', handleClick: () => {console.log('All')}},
        {name: 'Active', handleClick: () => {console.log('Active')}},
        {name: 'Completed', handleClick: () => {console.log('Completed')}}
    ]
    return (
        <nav>
            <ul>
                {items.map(item => (<NavbarItem item={item} />))}
            </ul>
        </nav>
    );
};

export {Navbar};