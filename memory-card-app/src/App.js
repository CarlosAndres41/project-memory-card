import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import LevelUp from './components/LevelUp';
import GameOver from './components/GameOver';

import shuffleDivs from './utils/shuffleDivs';

const coolImages = require('cool-images');

function App() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [images, setImages] = useState(coolImages.many(200, 200, level + 2));
    const [clickedCards, setClickedCards] = useState([]);
    const [showLevelUp, setShowLevelUp] = useState(false);
    const [gameOver, setGameOver] = useState(false);
    const [showGameOver, setShowGameOver] = useState(false);

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
            setGameOver(true);
        }
    }

    function playAgain() {
        setGameOver(false);
        setScore(0);
        setLevel(1);
        setImages(coolImages.many(200, 200, level + 2));
    }

    useEffect(() => {
        setImages(coolImages.many(200, 200, level + 2));
        if (level > 1) {
            // Display level Up message when level changes:
            setShowLevelUp(true);
            // Hide message after 3 seconds:
            const timeout = setTimeout(() => {
                setShowLevelUp(false);
            }, 3000);
            // Cleanup function:
            return () => clearTimeout(timeout);
        }
    }, [level]);

    useEffect(() => {
        setShowGameOver(true);
    }, [gameOver]);

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
            {showLevelUp && <LevelUp level={level} />}
            {gameOver && <GameOver score={score} onClick={playAgain} />}
        </div>
    );
}

export default App;
