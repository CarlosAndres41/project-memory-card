import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Card from './components/Card';

import shuffleDivs from './utils/shuffleDivs';

const coolImages = require('cool-images');
let images = coolImages.many(200, 200, 3);

function App() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
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
        window.addEventListener('DOMContentLoaded', () => {
            console.log('level changed');
        });
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
