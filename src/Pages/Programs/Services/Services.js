import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [programs, setPrograms] = useState([]);
    useEffect(() => {
        fetch('http://localhost:7000/programs')
            .then(res => res.json())
            .then(data => setPrograms(data));
    }, []);
    return (
        <div style={{ backgroundColor: '#e3e0de' }}>
            <Typography sx={{ fontWeight: 'bold', pt: 10, pr: '15%', pb: 10 }} variant='h2' component='div'><span style={{ color: '#fe0049' }}> <span style={{ backgroundColor: 'white', borderRadius: '50%', padding: '4%' }}>Music</span> School</span> Programs</Typography>
            <Container>
                <Grid container spacing={2} sx={{ py: 5 }}>
                    {
                        programs.map(program =>
                            <Service
                                key={program._id}
                                program={program}>
                            </Service>)
                    }
                </Grid>
            </Container>
        </div >
    );
};

export default Services;