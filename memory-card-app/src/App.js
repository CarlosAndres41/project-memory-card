import './App.css';
import Header from './components/Header';
import Card from './components/Card';

function App() {
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
