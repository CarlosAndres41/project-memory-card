import Logo from './Logo';
import Name from './Name';
import Scoreboard from './Scoreboard';

const Header = () => {
    return (
        <div className='header'>
            <div className='name-logo'>
                <Logo />
                <Name />
            </div>
            <Scoreboard />
        </div>
    );
};

export default Header;
