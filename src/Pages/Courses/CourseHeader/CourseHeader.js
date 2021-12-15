import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import course from '../../../images/french_course_2.png'


const CourseHeader = () => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid sx={{ mt: 25, p: 12 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1' }} className='line' gutterBottom component="div">COURSES</Typography>
                    <Typography variant='h3' sx={{ fontWeight: '500' }} gutterBottom component="div">Choose a program that suits you</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={course} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default CourseHeader;