import Stripe from "stripe";

export default async function handler(req, res) {
  try {
    // Make sure the key is available
    const secret = process.env.STRIPE_SECRET_KEY;
    const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;

    if (!secret || !publishable) {
      return res.status(400).json({
        ok: false,
        message: "❌ Missing Stripe environment variables in Vercel.",
        secretExists: !!secret,
        publishableExists: !!publishable,
      });
    }

    // Try initializing Stripe with your secret key
    const stripe = new Stripe(secret);

    // Quick test call to Stripe
    const balance = await stripe.balance.retrieve();

    return res.status(200).json({
      ok: true,
      message: "✅ Stripe key is valid and working!",
      secretStartsWith: secret.slice(0, 8),
      secretEndsWith: secret.slice(-5),
      publishableStartsWith: publishable.slice(0, 8),
      publishableEndsWith: publishable.slice(-5),
      stripeResponse: balance.object,
    });
  } catch (err) {
    console.error("Stripe check failed:", err);
    res.status(500).json({
      ok: false,
      message: "❌ Stripe key check failed.",
      error: err.message,
    });
  }
}
