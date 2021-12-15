import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import books from '../../../images/hero_books.png';
import './AboutHeader.css';


const Header = () => {
    return (
        <Container >
            <Grid container spacing={2}>
                <Grid sx={{ mt: 25, p: 12 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1' }} className='line' gutterBottom component="div">ABOUT US</Typography>
                    <Typography variant='h2' sx={{ fontWeight: '500' }} gutterBottom component="div">A few reasons for choosing us</Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={books} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Header;