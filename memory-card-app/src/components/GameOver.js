const GameOver = (props) => {
    return (
        <div className='game-over'>
            <h1>Game Over</h1>
            <p>
                Your score: <span className='final-score'>{props.score}</span>
            </p>
            <button className='play-again' onClick={props.onClick}>
                Play Again
            </button>
        </div>
    );
};

export default GameOver;
