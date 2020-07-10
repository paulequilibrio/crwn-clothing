import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import Logo from '../../assets/crown.svg'
import axios from 'redaxios'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_RicOJFWgOtPlwpIowPaOz6n700Gg4LA5Xx'

  const onToken = token => {
    console.log(token)
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response => {
      console.log(response)
      window.alert('Payment successful')
    }).catch(error => {
      console.error('Payment error:', JSON.parse(error))
      window.alert(`There was an issue with your payment.
      Please sure you use the provided credit card.`)
    })
  }

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image={Logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
