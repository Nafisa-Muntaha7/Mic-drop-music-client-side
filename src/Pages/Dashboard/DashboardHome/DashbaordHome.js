import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import shadyGuitarist from '../../../images/guitar.girl.png';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';

const DashbaordHome = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={7} sm={12}>
                    <img src={shadyGuitarist} alt="" width='100%' />
                </Grid>
                <Grid item xs={12} md={5} sm={12}>
                    <Typography variant='h4' sx={{ mt: 25, color: '#fe0049' }} gutterBottom component='div'>  <LibraryMusicIcon /> The best place for the music teachers and those who love music!</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashbaordHome;