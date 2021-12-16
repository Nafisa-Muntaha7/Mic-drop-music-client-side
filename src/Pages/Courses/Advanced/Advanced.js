import { Box, Button, Grid, Typography } from '@mui/material';
import advancedCourse from '../../../images/letter_c.png'
import React from 'react';

const Advanced = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#e5d1ed', p: 15 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={advancedCourse} alt="" />
                </Grid>
                <Grid sx={{ mt: 20 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1', fontSize: 18 }} gutterBottom component="div">LEVEL C</Typography>
                    <Typography variant='h3' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Advanced</Typography>
                    <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 18 }} gutterBottom component="div">Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace.</Typography>

                    <Button color='secondary' sx={{ m: '3%', px: '35px', py: '12px', borderRadius: 10, backgroundColor: '#d03bd9', color: 'black' }} variant="outlined">APPLY TODAY</Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Advanced;