const stripe = require('stripe')('your_stripe_secret_key_here');

const createPaymentIntent = async (amount, currency) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: currency,
    });
    return paymentIntent.client_secret;
  } catch (error) {
    console.error('Error creating payment intent:', error);
    return null;
  }
};

module.exports = {
  createPaymentIntent,
};