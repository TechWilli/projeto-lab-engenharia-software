import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { title, author } });
        setTitle('');
        setAuthor('');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="título" value={title}
                    onChange={(e) => setTitle(e.target.value)} required />

                <input type="text" placeholder="autor" value={author}
                    onChange={(e) => setAuthor(e.target.value)} required />

                <input className="btn btn-primary" type="submit" value="adicionar" style={{ backgroundColor: '#3498DB' }}/>
            </form>
        </div>
    );
}

export default NewBookForm;