import { Alert, Box, Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import BuyCourse from '../BuyCourse/BuyCourse'

const Service = ({ program }) => {
    const { name, img, price, description } = program;
    const [open, setOpen] = React.useState(false);
    const [success, setSuccess] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            {success && <Alert severity="success">You successfully bought the course!</Alert>}
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img src={img} alt="" width='100%' />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant='h6' sx={{ color: '#fe0049', fontSize: 18, pt: 8 }} gutterBottom component="div">COURSES</Typography>
                    <Typography variant='h4' gutterBottom component='div'>{name}</Typography>
                    <Typography variant='h5' gutterBottom component='div'>Price: {price}</Typography>
                    <Typography variant='p' gutterBottom component='div'>{description}</Typography>
                    <Button onClick={handleOpen} sx={{ m: '3%', px: '25px', py: '8px', borderRadius: 10 }} color='secondary' variant='outlined'>Buy Course</Button>
                </Grid>
            </Grid>
            <BuyCourse
                setSuccess={setSuccess}
                program={program}
                open={open}
                handleClose={handleClose}
            ></BuyCourse>
        </Box>
    );
};

export default Service;