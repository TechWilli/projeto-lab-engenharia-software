import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // background-color: tomato;
`;

const BookButton = styled.button`
    border: none;
    border-radius: 10px;
    border-right: 2px solid orange;
    border-bottom: 2px solid orange;
    margin: 10px;
`;

const LoginButton = styled.button`
    border: none;
    border-radius: 10px;
    border-right: 2px solid #002f6c;
    border-bottom: 2px solid #002f6c;
    margin: 10px;
`;

export default function Home(props) {

    const history = useHistory();

    return (
        <Container>
            <LoginButton
                className="btn-lg btn-primary"
                type="button"
                onClick={() => history.push('/login')}>
                login
            </LoginButton>

            <BookButton
                className="btn-lg btn-warning"
                type="button"
                onClick={() => history.push('/books')}>
                livros
            </BookButton>
        </Container>
    );
}