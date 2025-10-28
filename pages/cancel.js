import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
        <XCircle className="mx-auto mb-4 text-red-500" size={60} />
        <h1 className="mb-3 text-2xl font-semibold text-gray-800">
          Payment Cancelled
        </h1>
        <p className="mb-6 text-gray-600">
          Your checkout session was cancelled. You can try again anytime.
        </p>
        <Link
          href="/"
          className="rounded-lg bg-gray-800 px-6 py-2 font-medium text-white transition hover:bg-gray-900"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}
