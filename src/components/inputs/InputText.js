import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
    width: 250px;
    height: 35px;
    background-color: #FFFFFF;
    border: none !important;
    outline: none;
    border-radius: 15px;
    padding-left: 35px;
    box-shadow: 2px 2px 5px #747474;
`;

export default function InputText(props) {

    return (
        <div className="m-3">
            <Input
                type={props.type || 'text'}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    );
}