import React from 'react';
import BookContextProvider from './contexts/BookContext';
import Routes from './routes';

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
