import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import oboe from '../../../images/oboa.png'
import React from 'react';

const Oboe = () => {
    return (
        <Box sx={{ flexGrow: 1, padding: '4%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#FA5858', margin: '15px' }} gutterBottom component="div">BEGINNERS COURSE</Typography>
                    <Typography variant='h2' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Oboa Lessons</Typography>
                    <Typography variant='h2' sx={{ fontWeight: 'bold' }} gutterBottom component="div">$599</Typography>
                    <Typography variant='p' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</Typography>
                    <Button className='button' sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10, backgroundColor: '#FA5858', color: 'black' }} variant="outlined">VIEW SCHEDULE</Button>
                    <Button className='button' sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10, backgroundColor: '#2EFE64', color: 'black' }} variant="outlined"><i className="fas fa-phone"></i> 1-567-340-034</Button>
                </Grid>
                <Grid item xs={12} md={6} sm={12}>
                    <img width='100%' src={oboe} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Oboe;