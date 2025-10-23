import Stripe from 'stripe';
import { buffer } from 'micro';
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = { api: { bodyParser: false } };

// Simple POST endpoint to create a Checkout Session.
// Expects a form POST with productId set to product record id (number or string).
// In production you should validate product IDs server-side against your Airtable/product DB.

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');
  try {
    // parse body (form-encoded for our simple form)
    const raw = await buffer(req);
    const bodyStr = raw.toString();
    const params = new URLSearchParams(bodyStr);
    const productId = params.get('productId') || '1';

    // For demo: simple product mapping (replace with Airtable lookup)
    const products = {
      '1': { name: 'Modern Resume Template', unit_amount: 1200 },
      '2': { name: 'Small Business Branding Kit', unit_amount: 2900 },
      '3': { name: '90-Day Productivity Planner', unit_amount: 1900 },
      '4': { name: 'Minimalist Study Organizer', unit_amount: 900 },
    };
    const product = products[productId] || products['1'];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: process.env.NEXT_PUBLIC_DEFAULT_CURRENCY || 'EUR',
          product_data: { name: product.name },
          unit_amount: product.unit_amount,
        },
        quantity: 1,
      }],
      success_url: `${req.headers.origin}/?success=true`,
      cancel_url: `${req.headers.origin}/?canceled=true`,
    });

    res.writeHead(303, { Location: session.url });
    res.end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal error' });
  }
}
