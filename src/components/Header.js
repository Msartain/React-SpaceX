import React from 'react';
import styled from 'styled-components';
import { login, logout } from '../services/firebase';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
    background-color: var(--primary-brand-color);
    box-shadow: 1px 1px 10px 1px var(--light-shadow);
    h1 {
        font-family: var(--logo-font);
        color: var(--secondary-brand-color);
    }

    img {
        height: 50px;
        border-radius: 50%;
        margin-right: 15px;
    }

    div {
        display: flex;
        align-items: center;
    }

    span {
        font-weight: 700;
        cursor: pointer;
        margin-right: 20px;
        color: var(--secondary-brand-color);
    }
`;

export default function Header(props) {
    console.log('props: ' , props);
    return (
        <StyledHeader>
            <h1>SpaceX Explorer</h1>
            <div>
                {
                    props.authenticated 
                    ? <div>
                        <span onClick={logout}>Logout</span>
                        <img src={props.avatar} alt={"default profile"} />
                       </div>
                    : <span onClick={login}>Login</span>
                }
            </div>
        </StyledHeader>
    );
};