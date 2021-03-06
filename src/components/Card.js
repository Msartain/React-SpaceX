import React from 'react';

import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid var(--primary-brand-color);
    border-radius: 12px;
    width: 300px;
    height: 150px;
    color: var(--primary-brand-color);
    margin: 16px;
    box-shadow: 1px 1px 5px 1px var(--light-shadow);
    
    &:hover {
        box-shadow: 1px 1px 15px 1px var(--light-shadow);
        cursor: pointer;
    }
`;

export default function Card(props) {
    return(
        <StyledCard>
            <h3>{props.missionName}</h3>
        </StyledCard>
    );
}