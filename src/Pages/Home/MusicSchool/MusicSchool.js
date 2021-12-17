import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import review from '../../../images/review-1.png'
import { NavLink } from 'react-router-dom';


const MusicSchool = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#e1e9f2', padding: '5%', marginBottom: '5%' }}>
            <div>
                <Typography sx={{ fontWeight: 'bold', paddingTop: '3%', color: '#FE2E2E' }} variant="h5" gutterBottom component="div">
                    HAVE YOU BEEN LOOKING FOR
                </Typography>
                <Typography sx={{ fontWeight: 'bold', color: '#0B0B3B' }} variant="h2" gutterBottom component="div">
                    A MUSIC SCHOOL?
                </Typography>
            </div>
            <Grid sx={{ p: '5%' }} container spacing={2}>
                <Grid item xs={12} md={7} sm={12}>
                    <img style={{ borderRadius: '50%', margin: '15px' }} src={review} alt="" />
                    <Typography variant='h5' style={{ fontStyle: 'italic', margin: '10px', fontSize: '30px' }} gutterBottom component="div">"Mic Drop music school is a MUST for anyone interested in bettering their music skills."</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: '#FA5858', marginTop: '3%' }} variant='p' gutterBottom component="div">Jessica Chan</Typography>
                    <Typography variant='p' gutterBottom>Student</Typography>
                </Grid>
                <Grid item xs={12} md={5} sm={12}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#FA5858', margin: '15px' }} gutterBottom component="div">ABOUT US</Typography>
                    <Typography variant='h3' sx={{ fontWeight: 'bold', color: '' }} gutterBottom component="div">MUSIC SCHOOL</Typography>
                    <Typography style={{ fontWeight: '600', color: '#263238', fontSize: '18px', marginTop: '8%' }} variant="h6" gutterBottom>Normcore proident sed selvage. Post-ironic ugh master cleanse etsy you probably haven't heard of them mustache mollit readymade kombucha pug minim veniam override the digital divide.</Typography>
                    <NavLink to="/" style={{ textDecoration: 'none' }}>
                        <Button sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10, backgroundColor: '#FA5858', color: 'black' }} variant="outlined">Apply Now</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </Box >
    );
};

export default MusicSchool;