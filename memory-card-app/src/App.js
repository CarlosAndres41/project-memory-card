import React, { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header';
import Card from './components/Card';

import addListeners from './utils/AddEvListeners';

const coolImages = require('cool-images');
const images = coolImages.many(200, 200, 8);

function App() {
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);

    function updateScore() {
        setScore(score + 1);
    }

    return (
        <div className='App'>
            <Header score={score} level={level} />
            <div className='gameboard'>
                {images.map((image, index) => (
                    <Card image={image} key={index} onClick={updateScore} />
                ))}
            </div>
        </div>
    );
}

export default App;
