import React, { useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import InputText from '../components/inputs/InputText';
import styled from 'styled-components';
import { ReactComponent as StudentIcon } from '../assets/icons/student.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user.svg';
import { ReactComponent as PasswordIcon } from '../assets/icons/padlock.svg';

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    height: 475px;
    background-color: #FAFAFA;
    box-shadow: 3px 3px 10px #747474;
    // margin: 70px 0 0 0;
    border-radius: 5px;
    border-top: 8px black solid !important;
    padding: 25px 0;
`;

export default function Login(props) {

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleUser = event => setUser(event.target.value);

    const handlePassword = event => setPassword(event.target.value);

    const history = useHistory();
    const sendToRoute = useCallback(() => {
        history.push('/');
    }, []);

    const handleLogin = () => {
        // alert(`user: ${user} password: ${password}`);
        if (user === 'admin' && password === 'admin') {
            sendToRoute();

        } else {
            alert('Apenas administradores são autorizados no momento :(');
        }

    }

    console.log('user:', user);
    console.log('password:', password);

    return (
        <div className="vh-100">
            <div className="d-flex vh-100 justify-content-center align-items-center">
                <div>
                    <div className="text-center">
                        <p className="text-dark">Bem-vindo à <span style={{ color: 'black', fontWeight: 'bold', fontSize: 20 }}>Biblioteca Digital</span></p>
                    </div>

                    <LoginContainer>
                        <div>
                            <StudentIcon width="150" height="150" />
                        </div>
                        <div className="mt-2">
                            <div>
                                <UserIcon width="17" height="17" style={{ position: 'absolute', marginLeft: 27, marginTop: 9, fill: '#404040' }} />
                                <InputText
                                    placeholder="login"
                                    type="text"
                                    value={user}
                                    onChange={handleUser}
                                />
                            </div>

                            <div>
                                <PasswordIcon width="17" height="17" style={{ position: 'absolute', marginLeft: 27, marginTop: 9, fill: '#404040' }} />
                                <InputText
                                    placeholder="senha"
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                />
                            </div>

                        </div>

                        <button
                            type="button"
                            className="btn btn-primary mb-4 mt-2"
                            style={{ width: 250 }}
                            onClick={handleLogin}
                        >
                            entrar
                        </button>

                        <p className="text-dark" style={{ marginBottom: 8, fontSize: 12 }}>Ainda não tem conta?</p>

                        <button
                            type="button"
                            className="btn btn-warning"
                            style={{ width: 250 }}
                            onClick={() => alert('funcionalidade em em desenvolvimento')}
                        >
                            cadastrar-se
                        </button>
                    </LoginContainer>
                </div>
            </div>
        </div>
    );
}