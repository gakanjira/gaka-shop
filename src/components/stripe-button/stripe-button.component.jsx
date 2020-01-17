import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishKey = 'pk_test_2cdCLkksNpzcRyuTnltyoFwK00SFjpS1UL';

    const onToken = token => {
        console.log(token);
        alert('Payment succesfull')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='Gaka Shop'
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishKey}
        />
    )
}

export default StripeCheckoutButton;