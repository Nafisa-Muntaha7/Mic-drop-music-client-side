import { Box, Button, Grid, Typography } from '@mui/material';
import intermediateCourse from '../../../images/letter_b.png'
import React from 'react';

const Intermediate = () => {
    return (
        <Box sx={{ flexGrow: 1, p: 15, mt: -65, position: 'relative' }}>
            <Grid container spacing={2}>
                <Grid sx={{ mt: 15 }} item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#9e06a1', fontSize: 18 }} gutterBottom component="div">LEVEL B</Typography>
                    <Typography variant='h3' sx={{ fontWeight: 'bold' }} gutterBottom component="div">Intermediate</Typography>
                    <Typography variant='h6' sx={{ fontWeight: 300, fontSize: 18 }} gutterBottom component="div">Elevate your vector art in the advanced digital Illustration course at Tabula. Instructor-led creative classes at your pace.</Typography>

                    <Button color='secondary' sx={{ m: '3%', px: '35px', py: '12px', borderRadius: 10, backgroundColor: '#d03bd9', color: 'black' }} variant="outlined">APPLY TODAY</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img width='100%' src={intermediateCourse} alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Intermediate;