import React from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import BookList from '../components/books/BookList';
import NewBookForm from '../components/books/NewBookForm';
import styled from 'styled-components';

const HomeButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    border-radius: 10px;
    border-right: 2px solid orange;
    border-bottom: 2px solid orange;
`;

export default function Books(props) {

    const history = useHistory();

    return (
        <div className="mx-auto" style={{ backgroundColor: '#9fa8da', width: '90%', maxWidth: 700, marginTop: '2.5rem' }}>
            <HomeButton
                className="btn btn-warning"
                type="button"
                onClick={() => history.push('/')}>
                home
            </HomeButton>
            <Navbar />
            <BookList />
            <NewBookForm />
        </div>
    );
}