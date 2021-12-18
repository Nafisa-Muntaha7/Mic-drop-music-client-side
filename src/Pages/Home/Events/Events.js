import { Container, Typography, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Event from '../Event/Event';

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('https://shielded-fjord-90529.herokuapp.com/events')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, []);
    return (
        <div>
            <Typography sx={{ fontWeight: 'bold', mt: 20 }} variant='h3' gutterBottom component='div'>Events &amp; Workshops</Typography>
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    {
                        events.map(event =>
                            <Event
                                key={event._id}
                                event={event}>
                            </Event>)
                    }
                </Grid>
            </Container>
        </div>
    );
};

export default Events;