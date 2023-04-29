const Scoreboard = (props) => {
    return (
        <div className='scoreboard'>
            <div className='level'>
                <span>Level: </span>
                <span className='current'>{props.level}</span>
            </div>
            <div className='score'>
                <span>Score: </span>
                <span className='current'>{props.score}</span>
            </div>
        </div>
    );
};

export default Scoreboard;
