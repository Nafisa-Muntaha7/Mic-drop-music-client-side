import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutForm = ({ purchase }) => {
    const { price } = purchase;
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElements(CardElement);
        if (card === null) {
            return;
        }

        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: 'black',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <Button variant='outlined' sx={{ color: '#fe0049' }} type="submit" disabled={!stripe}>
                    Pay {price}
                </Button>
            </form>
        </div>
    );
};

export default CheckOutForm;