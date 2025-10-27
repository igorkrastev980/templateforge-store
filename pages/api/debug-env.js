export default function handler(req, res) {
  res.status(200).json({
    stripeKeyExists: !!process.env.STRIPE_SECRET_KEY,
    keyStart: process.env.STRIPE_SECRET_KEY?.slice(0, 8),
    keyEnd: process.env.STRIPE_SECRET_KEY?.slice(-6),
    publishableKeyExists: !!process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
    pubKeyStart: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.slice(0, 8),
    pubKeyEnd: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY?.slice(-6),
  });
}
