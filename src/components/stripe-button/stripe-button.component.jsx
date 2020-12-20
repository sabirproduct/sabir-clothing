import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HQlEcEOnyK5IM0k67Sg2xXPpqYaUzhhIGxxa4cSyGbBtYDdnX1zq8YyPLEH5v2DgPhfXdpTBmoAaTVthDVQUezz00yT6VpJzl';

    const onToken = token => {
        alert('Payment Successful')
    }
    return (
        <StripeCheckOut 
        label='Pay Now'
        name='Sabir Clothing Pvt. Ltd'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is : $${price}`}
        amout ={priceForStripe}
        panelLabel='Pay Now'
        token={ onToken }
        stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;