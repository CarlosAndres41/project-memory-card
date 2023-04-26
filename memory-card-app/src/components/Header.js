import Logo from './Logo';
import Name from './Name';

const Header = () => {
    return (
        <div className='header'>
            <div className='name-logo'>
                <Logo />
                <Name />
            </div>
        </div>
    );
};

export default Header;
