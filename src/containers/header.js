import {PrincipalTitle} from '../components/texts/titles';
import {Navbar} from '../components/navbar/navbar';

const Header = props => {
    return (
        <header className="w-full flex justify-center mb-6">
            <div>
            <PrincipalTitle text={props.title}/>
            <Navbar handleTabChange={props.handleTabChange} tabs={props.tabs}/>
            </div>
        </header>
    );
};

export default Header;