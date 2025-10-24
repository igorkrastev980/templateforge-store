export default async function handler(req, res) {
  try {
    const key = process.env.STRIPE_SECRET_KEY;

    if (!key) {
      return res.status(400).json({
        ok: false,
        message: "❌ STRIPE_SECRET_KEY is not defined in environment variables.",
      });
    }

    return res.status(200).json({
      ok: true,
      message: "✅ Stripe secret key is detected!",
      startsWith: key.slice(0, 10),
      endsWith: key.slice(-6),
      length: key.length,
    });
  } catch (error) {
    return res.status(500).json({
      ok: false,
      message: "⚠️ Error reading Stripe key",
      error: error.message,
    });
  }
}
