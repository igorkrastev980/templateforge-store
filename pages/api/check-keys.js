export default function handler(req, res) {
  const secret = process.env.STRIPE_SECRET_KEY || "undefined";
  const publishable = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "undefined";
  res.status(200).json({
    secretStartsWith: secret.slice(0, 8),
    secretLength: secret.length,
    publishableStartsWith: publishable.slice(0, 8),
    publishableLength: publishable.length,
  });
}
