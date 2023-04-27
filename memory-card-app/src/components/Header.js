import Logo from './Logo';
import Name from './Name';
import Scoreboard from './Scoreboard';

const Header = (props) => {
    const { score, level } = props;
    return (
        <div className='header'>
            <div className='name-logo'>
                <Logo />
                <Name />
            </div>
            <Scoreboard score={score} level={level} />
        </div>
    );
};

export default Header;
