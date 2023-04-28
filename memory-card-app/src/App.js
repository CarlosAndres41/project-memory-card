import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Card from './components/Card';

import shuffleDivs from './utils/shuffleDivs';

const coolImages = require('cool-images');

function App() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [images, setImages] = useState(coolImages.many(200, 200, level + 2));
    const [clickedCards, setClickedCards] = useState([]);

    function checkWin() {
        if (clickedCards.length === images.length) {
            console.log('Level Up');
            setClickedCards([]);
            setLevel(level + 1);
        }
    }

    function updateScore(e) {
        if (!clickedCards.includes(e.target.attributes.index.value)) {
            clickedCards.push(e.target.attributes.index.value);
            checkWin();
            shuffleDivs();
            setScore(score + 1);
        } else {
            console.log('you lose');
        }
    }

    useEffect(() => {
        setImages(coolImages.many(200, 200, level + 2));
    }, [level]);

    return (
        <div className='App'>
            <Header score={score} level={level} />
            <div className='gameboard'>
                {images.map((image, index) => (
                    <Card
                        image={image}
                        key={index}
                        index={index}
                        onClick={updateScore}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
