import {PrincipalTitle} from '../components/texts/titles';
import {Navbar} from '../components/navbar/navbar';

const Header = props => {
    return (
        <header>
            <PrincipalTitle text={props.title}/>
            <Navbar />
        </header>
    );
};

export default Header;