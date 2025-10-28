import Stripe from "stripe";
import { buffer } from "micro";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Tell Next.js to not parse the body automatically
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method === "POST") {
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      const buf = await buffer(req);
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET // 👈 this comes from your Stripe dashboard
      );
    } catch (err) {
      console.error("⚠️ Webhook signature verification failed.", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    // ✅ Handle successful checkout session
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      console.log("💰 Payment received:", session);

      // 👉 TODO: Save order data to Airtable or DB
      // Example:
      // await saveOrderToAirtable({
      //   email: session.customer_email,
      //   amount: session.amount_total / 100,
      //   product: session.metadata.productName
      // });
    }

    res.status(200).send("✅ Webhook received");
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
  }
}
