import React from 'react';
import './App.css';
import ItemList from './components/ItemList';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Item Management</h1>
            </header>
            <main>
                <ItemList />
            </main>
        </div>
    );
}

export default App;