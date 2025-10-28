import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id, {
      expand: ["line_items", "customer_details"],
    });

    res.status(200).json(session);
  } catch (err) {
    console.error("Error retrieving session:", err.message);
    res.status(500).json({ error: err.message });
  }
}
