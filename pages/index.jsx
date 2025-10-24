import Head from 'next/head'
import Homepage from '../components/Homepage'

export default function Home() {
  return (
    <>
      <Head>
        <title>TemplateForge — Craft Professional Results in Minutes</title>
        <meta name="description" content="Premium templates for work, school and life." />
      </Head>
      <Homepage />
    </>
  )
}
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      alert("Checkout session could not be created");
      console.error(data);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Test Template (€1)</h1>
      <p className="text-gray-600 mb-6">Try buying this to test Stripe Checkout</p>
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition"
      >
        {loading ? "Redirecting..." : "Buy Now"}
      </button>
    </div>
  );
}
