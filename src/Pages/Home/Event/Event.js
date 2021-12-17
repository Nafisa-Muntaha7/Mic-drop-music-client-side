import { Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';

const Event = ({ event }) => {
    const { name, date, img } = event;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ width: '100%', height: '100%', border: 0, boxShadow: 0, mb: 4 }}>
                <img src={img} alt="" width='100%' />
                <CardContent>
                    <Typography sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
                        {name}
                    </Typography>
                    <Typography sx={{ color: '#ed585a' }} variant="h4" component="div">
                        {date}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Event;