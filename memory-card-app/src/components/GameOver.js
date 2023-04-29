const GameOver = (props) => {
    return (
        <div className='game-over'>
            <h1>Game Over</h1>
            <p>Your score: {props.score}</p>
            <button onClick={props.onClick}>Play Again</button>
        </div>
    );
};

export default GameOver;
