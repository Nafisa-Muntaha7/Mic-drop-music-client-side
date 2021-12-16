import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import boy from '../../../images/about_inner_02.png';
import teacher1 from '../../../images/teacher_1.jpg';
import teacher2 from '../../../images/teacher_2.jpg';
import teacher3 from '../../../images/teacher_3.jpg';
import teacher4 from '../../../images/teacher_4.jpg';

const Teachers = () => {
    return (
        <>
            <Container>
                <Grid sx={{ mt: 15 }} container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img src={boy} width='100%' alt="" />
                    </Grid>
                    <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                        <Typography variant="h2" gutterBottom component='div'>Our Talented Teachers</Typography>
                        <Button color='secondary' sx={{ m: '3%', px: '35px', py: '10px', borderRadius: 10, backgroundColor: '#d03bd9', color: 'black' }} variant="outlined">APPLY TODAY</Button>
                    </Grid>
                </Grid>

            </Container>
            <Box sx={{ flexGrow: 1, mt: 15, mb: 15 }}>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <img width='75%' src={teacher1} alt="" />
                        <Typography variant='h6' sx={{ color: '#9e06a1' }} gutterBottom component="div">ITALIAN</Typography>
                        <Typography variant='h5' gutterBottom component="div">July Roberts</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img width='75%' src={teacher2} alt="" />
                        <Typography variant='h6' sx={{ color: '#9e06a1' }} gutterBottom component="div">FRENCH</Typography>
                        <Typography variant='h5' gutterBottom component="div">Lando Norris</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img width='75%' src={teacher3} alt="" />
                        <Typography variant='h6' sx={{ color: '#9e06a1' }} gutterBottom component="div">SPANISH</Typography>
                        <Typography variant='h5' gutterBottom component="div">Emma Stone</Typography>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <img width='75%' src={teacher4} alt="" />
                        <Typography variant='h6' sx={{ color: '#9e06a1' }} gutterBottom component="div">PORTUGESE</Typography>
                        <Typography variant='h5' gutterBottom component="div">Nicholas Latifi</Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Teachers;