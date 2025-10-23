/*
Stripe webhook endpoint to handle checkout.session.completed events.
On success, this endpoint should send the buyer an email with product download links.
This example uses a minimal approach: it expects the session to include the purchaser email,
and looks up products in Airtable (you should implement a proper mapping).
*/

import Stripe from 'stripe';
import { buffer } from 'micro';
import sendEmail from '../../lib/sendEmail';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const sig = req.headers['stripe-signature'];
  const buf = await buffer(req);
  let event;

  try {
    event = stripe.webhooks.constructEvent(buf.toString(), sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const customerEmail = session.customer_details?.email || session.customer_email;
    // TODO: lookup product(s) and file links from Airtable. For demo we send a static sample link.
    const files = [{ name: 'Sample Template', url: process.env.GOOGLE_DRIVE_BASE_URL || 'https://drive.google.com' }];
    if (customerEmail) {
      try {
        await sendEmail(customerEmail, files);
      } catch (err) {
        console.error('Send email error', err);
      }
    }
  }

  res.json({ received: true });
}
