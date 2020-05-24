import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Routes from './routes';

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BookContextProvider>
                <Routes />
            </BookContextProvider>
        </div>
    );
}

export default App;
