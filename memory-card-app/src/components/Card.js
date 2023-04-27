const Card = (props) => {
    return (
        <div className='card' onClick={props.onClick}>
            <div className='card-body'>
                <img src={props.image} alt='card'></img>
            </div>
        </div>
    );
};

export default Card;
