import { Box, Button, Grid, Typography } from '@mui/material';
import beginnerCourse from '../../../images/letter_a.png';
import './Beginner.css';
import React from 'react';

const Beginner = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#e5d1ed', p: 15, pt: 30, pb: 70, position: 'relative' }}>

            <div class="custom-shape-divider-top-1639810144">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <div class="custom-shape-divider-bottom-1639810225">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={beginnerCourse} alt="" />
                </Grid>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1', fontSize: 18 }} gutterBottom component="div">LEVEL A</Typography>
                    <Typography variant='h3' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Beginner</Typography>
                    <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 18 }} gutterBottom component="div">Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace.</Typography>

                    <Button color='secondary' sx={{ m: '3%', px: '35px', py: '12px', borderRadius: 10, backgroundColor: '#d03bd9', color: 'black' }} variant="outlined">APPLY TODAY</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Beginner;