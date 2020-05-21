import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const Navbar = () => {
    const { books } = useContext(BookContext);
    
    return (
        <div className="navbar">
            <h1><pan role="img">📘📚</pan> <b>Livros</b></h1>
            <p>Existem {books.length} cadastrados no acervo</p>
        </div>
    );
}

export default Navbar;