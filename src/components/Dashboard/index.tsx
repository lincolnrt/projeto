import React from 'react';
import { Summary } from '../Summary';
import { EventTable } from '../TicketTable';
import { Container } from './styles';


export function Dashboard() {
    return(
        <Container>
            <Summary />
            <EventTable />
        </Container>
    )
}