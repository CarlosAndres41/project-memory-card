const LevelUp = (props) => {
    return (
        <div className='level-up'>
            <h1>Congratulations, you've leveled up</h1>
            <h3>
                Loading level {props.level}
                <span>...</span>
            </h3>
        </div>
    );
};

export default LevelUp;
