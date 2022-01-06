import { Typography } from '@mui/material';
import React from 'react';
import thumbs_up from '../../../images/thumbs_up.jpg';

const PaymentSuccess = () => {
    return (
        <div>
            <img src={thumbs_up} width="60%" alt="" />
            <Typography variant='h4' sx={{ p: 3 }} component='div' gutterBottom >You successfully bought the course!</Typography>
        </div>
    );
};

export default PaymentSuccess;