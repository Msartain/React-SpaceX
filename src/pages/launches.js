import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

import { getLaunchData } from '../services/spacex-api';

const StyledDiv = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    section {
        display: flex;
        flex-wrap: wrap;
        margin: 15px auto;
        justify-content: center;
    }
`;

export default function Launches(props) {

    const [launchData, setLaunchData] = useState([])

    useEffect(() => {
        async function fetchData() {
            const data = await getLaunchData();
            setLaunchData(data);
        }
        fetchData();
    }, []);

    const Cards = launchData.map(launch => 
            <Card key={launch.flight_number} missionName={launch.mission_name}/>
        )

    return (
        <StyledDiv>
            <section>
                {Cards}
            </section>
        </StyledDiv>
    );
};