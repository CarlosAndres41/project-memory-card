import React, { useState } from 'react';

import './App.css';
import Header from './components/Header';
import Card from './components/Card';

import addListeners from './utils/AddEvListeners';

const coolImages = require('cool-images');

function App() {
    const images = coolImages.many(200, 200, 8);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);

    addListeners();

    return (
        <div className='App'>
            <Header score={score} level={level} />
            <div className='gameboard'>
                {images.map((image, index) => (
                    <Card image={image} key={index} />
                ))}
            </div>
        </div>
    );
}

export default App;
