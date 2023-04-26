import './App.css';
import Header from './components/Header';
import Card from './components/Card';

const coolImages = require('cool-images');

function App() {
    const images = coolImages.many(100, 200, 8);

    return (
        <div className='App'>
            <Header />
            <div className='gameboard'>
                <Card />
            </div>
        </div>
    );
}

export default App;
