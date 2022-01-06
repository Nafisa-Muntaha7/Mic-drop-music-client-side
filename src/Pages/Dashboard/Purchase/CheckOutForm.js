import { Button } from '@mui/material';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckOutForm = ({ purchase }) => {
    const { price } = purchase;
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');

    // useEffect(() => {
    //     fetch('http://localhost:7000/create-payment-intent', {
    //         method: 'POST',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify({ price })
    //     })
    //         .then(res => res.json())
    //         .then(data => console.log(data));
    // }, [price])

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            setError(error.message);
        }
        else {
            setError('');
            console.log(paymentMethod)
        }
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
                {
                    error && <p style={{ color: 'red', padding: 10 }}>{error}</p>
                }
            </form>
        </div>
    );
};

export default CheckOutForm;