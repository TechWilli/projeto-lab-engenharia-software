import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import LibraryImage from '../assets/images/library_building.png';
import BackgroundImage from '../assets/images/books_shelves_background.jpg';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #EFEFEF;
    width: 550px;
    padding-bottom: 20px;
    box-shadow: 5px 4px 8px rgb(0, 0, 0, .5);
`;

const BookButton = styled.button`
    border: none;
    border-radius: 0px;
    border-right: 2px solid orange;
    border-bottom: 2px solid orange;
    margin: 10px;
    outline: none !important;
`;

const LoginButton = styled.button`
    background-color: #ff8f00;
    border: none;
    border-radius: 0px;
    border-right: 2px solid #c56000;
    border-bottom: 2px solid #c56000;
    margin: 10px;
    outline: none;
    outline: none !important;

    &:hover {
        background-color: #c56000;
    }
`;

const StudentButton = styled.button`
    background-color: #FFA000;
    border: none;
    border-radius: 0px;
    border-right: 2px solid #c67100;
    border-bottom: 2px solid #c67100;
    margin: 10px;
    outline: none;
    outline: none !important;

    &:hover {
        background-color: #c67100;
    }
`;

const WelcomeMessage = styled.span`
    display: block;
    font-size: 2rem;
    background-color: white;
    margin-bottom: 10px;
    text-align: center;
    font-weight: bold;
`;

const Background = styled.div`
    background-image: url(${BackgroundImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
    opacity: .7;
`;

export default function Home(props) {

    const history = useHistory();

    return (
        <div>
            <Background />

            <Container>
                <WelcomeMessage>MENU</WelcomeMessage>

                <div className="text-center my-4">
                    <img src={LibraryImage} width="400px" height="400px" alt="imagem de biblioteca" />
                </div>

                <div className="text-center">
                    <LoginButton
                        className="btn-lg text-white font-weight-bold"
                        type="button"
                        onClick={() => history.push('/login')}>
                        login
                </LoginButton>

                    <StudentButton
                        className="btn-lg text-white font-weight-bold"
                        type="button"
                        onClick={() => history.push('/students')}>
                        estudantes
                </StudentButton>

                    <BookButton
                        className="btn-lg btn-warning text-white font-weight-bold"
                        type="button"
                        onClick={() => history.push('/books')}>
                        livros
                </BookButton>
                </div>
            </Container>
        </div>
    );
}