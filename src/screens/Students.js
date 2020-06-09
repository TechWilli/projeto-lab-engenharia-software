import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HomeButton = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    border-radius: 0px;
    border-right: 2px solid orange;
    border-bottom: 2px solid orange;
`;

export default function Students(props) {

    const history = useHistory();

    return (
        <div>
            <HomeButton
                className="btn-lg btn-warning"
                type="button"
                onClick={() => history.push('/')}>
                home
            </HomeButton>

            <div style={{ margin: 100 }}>
                <span>Cadastro de novos estudantes (users)</span>
            </div>
        </div>
    );
}