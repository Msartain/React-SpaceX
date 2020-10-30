import React from 'react';
import styled from 'styled-components';

import { Redirect } from 'react-router-dom';

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function Login(props) {
    if (props.authenticated) return <Redirect to="/launches" />
    return (
        <StyledDiv>
            Login Page
        </StyledDiv>
    );
};