import { CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function SuccessPage() {
  const router = useRouter();
  const { session_id } = router.query;
  const [session, setSession] = useState(null);

  useEffect(() => {
    if (session_id) {
      fetch(`/api/get-session?session_id=${session_id}`)
        .then((res) => res.json())
        .then((data) => setSession(data));
    }
  }, [session_id]);

  if (!session)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p>Loading payment details...</p>
      </div>
    );

  const product = session.line_items?.data[0]?.description;
  const amount = (session.amount_total / 100).toFixed(2);
  const email = session.customer_details?.email;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
        <CheckCircle className="mx-auto mb-4 text-green-500" size={60} />
        <h1 className="mb-3 text-2xl font-semibold text-gray-800">
          Payment Successful 🎉
        </h1>

        <p className="mb-2 text-gray-600">Thank you for your purchase!</p>
        <p className="text-sm text-gray-500">Receipt sent to {email}</p>

        <div className="my-4 border-t border-gray-200" />

        <p className="text-lg font-medium text-gray-800">{product}</p>
        <p className="text-xl font-bold text-green-600">${amount}</p>

        <div className="mt-6 space-y-3">
          <a
            href="/downloads/template.zip"
            className="block rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition hover:bg-green-700"
          >
            Download Your Product
          </a>
          <Link
            href="/"
            className="block text-sm font-medium text-gray-500 underline hover:text-gray-700"
          >
            Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
