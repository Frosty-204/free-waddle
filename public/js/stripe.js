import axios from 'axios';
import Stripe from 'stripe';
import { showAlert } from './alert';

export const bookTour = async (tourId) => {
  try {
    const stripePublic =
      'pk_test_51P0laACR8u9v4Hti4JkIdBQu48qGD1ZYzUS92dMsjmaVkqXqHc86uP5qGi3DHrvlpNV0wSZXP0ORkItacrZ2LFpX00fWNw77hn';
    const stripe = new Stripe(stripePublic);

    // 1) Get Checkout session from API
    const session = await axios(
      `http://127.0.0.1:3000/api/v1/bookings/checkout-session/${tourId}`,
    );
    console.log(session);
    // 2) Create checkout form + charge credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.id,
    // });

    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
