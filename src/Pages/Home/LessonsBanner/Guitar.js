import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import guitar from '../../../images/guiter.boy.png'
import React from 'react';

const Guitar = () => {
    return (
        <Box sx={{ flexGrow: 1, p: '4%', pb: '10%' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} sm={12}>
                    <img width='100%' src={guitar} alt="" />
                </Grid>
                <Grid item style={{ padding: '5%' }} xs={12} md={6} sm={12}>
                    <Typography variant='h6' sx={{ fontWeight: 'bold', color: '#FA5858', margin: '15px' }} gutterBottom component="div">SPECIAL OFFER</Typography>
                    <Typography variant='h2' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Guitar Lessons</Typography>
                    <Typography variant='h2' sx={{ fontWeight: 'bold' }} gutterBottom component="div">$599</Typography>
                    <Typography variant='p' gutterBottom component="div">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500</Typography>
                    <Button sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10, backgroundColor: '#FA5858', color: 'black' }} variant="outlined">VIEW SCHEDULE</Button>
                    <Button sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10, backgroundColor: '#2EFE64', color: 'black' }} variant="outlined"><i className="fas fa-phone"></i> 1-805-634-678</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Guitar;