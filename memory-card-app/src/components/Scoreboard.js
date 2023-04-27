const Scoreboard = (props) => {
    return (
        <div className='scoreboard'>
            <div className='level'>
                <span>Level: </span>
                <span>{props.level}</span>
            </div>
            <div className='score'>
                <span>Score: </span>
                <span>{props.score}</span>
            </div>
        </div>
    );
};

export default Scoreboard;
