import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import letter from '../../../images/about_inner_01.png'

const Features = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#e5d1ed', m: 10, borderRadius: 15 }}>
            <Grid container spacing={2}>
                <Grid sx={{ p: 10, mt: 5 }} item xs={12} md={6}>
                    <img src={letter} width='100%' alt="" />
                </Grid>
                <Grid sx={{ mt: 17, p: 10 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1', fontSize: 18 }} gutterBottom component="div">A CHOICE OF PROGRAMS FOR EVERY LEVEL AND NEED</Typography>
                    <Typography variant='h2' sx={{ fontWeight: '500' }} gutterBottom component="div">Our main features</Typography>
                    <Typography variant="p" gutterBottom component='div'>Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace. Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace grow the holistic world view of disruptive.</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Features;