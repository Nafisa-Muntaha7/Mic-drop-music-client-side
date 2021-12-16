import { Box, Button, Grid, Typography } from '@mui/material';
import guitarMan from '../../../images/guitar_man.png'
import React from 'react';

const GuitarOffer = () => {
    return (
        <Box sx={{ my: 15 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7}>
                    <img src={guitarMan} alt="" width='100%' />
                </Grid>
                <Grid sx={{ mt: 15 }} item xs={12} md={5}>
                    <Typography variant='h6' sx={{ fontSize: 18, pt: 8 }} gutterBottom component="div">SPECIAL OFFER</Typography>
                    <Typography sx={{ color: '#fe0049', fontWeight: 'bold' }} variant='h3' gutterBottom component='div'>Guitar Lessons</Typography>
                    <Typography sx={{ fontWeight: 'bold' }} variant='h2' gutterBottom component='div'>$299</Typography>
                    <Button color='secondary' sx={{ m: '3%', px: '35px', py: '10px', borderRadius: 10, backgroundColor: '#e3196a', color: 'black' }} variant="outlined">APPLY TODAY</Button>
                </Grid>
            </Grid>
            <Typography sx={{ backgroundColor: '#fe0049', color: 'white', fontWeight: 'bold', p: 5 }} variant='h3' gutterBottom component='div'>Let's take one move forward to your dreams!</Typography>
        </Box>
    );
};

export default GuitarOffer;