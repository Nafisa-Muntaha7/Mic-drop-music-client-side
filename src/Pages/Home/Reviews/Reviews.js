import { Card, Container, Grid, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

const Reviews = () => {

    return (
        <Container sx={{ my: '10%' }}>
            <Typography variant="h3" sx={{ mb: 5, fontWeight: 500 }}> Reviews </Typography>
            {/* <Grid container spacing={5}>
                {
                    reviews?.map(review => (
                        <Grid item xs={12} sm={6} md={4}>
                            <Card sx={{ width: '100%', height: '100%', boxShadow: 3, padding: 3, backgroundColor: '#F4F1F9' }}>
                                <Typography variant="h5">
                                    {review?.name}
                                </Typography>
                                <Typography variant="h6" sx={{ mb: 2 }}>
                                    Email: {review?.email}
                                </Typography>
                                <Typography variant="body1">
                                    {review?.review}
                                </Typography>
                                <Rating
                                    name="read-only"
                                    value={review?.rating}
                                    readOnly />
                            </Card>
                        </Grid>
                    ))};
            </Grid> */}
        </Container>
    );
};

export default Reviews;