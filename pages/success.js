import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md rounded-2xl bg-white p-8 text-center shadow-md">
        <CheckCircle className="mx-auto mb-4 text-green-500" size={60} />
        <h1 className="mb-3 text-2xl font-semibold text-gray-800">
          Payment Successful 🎉
        </h1>
        <p className="mb-6 text-gray-600">
          Thank you for your purchase! Your payment was processed successfully.
        </p>

        {/* Example: Digital download link or button */}
        <a
          href="/downloads/template.zip"
          className="mb-3 inline-block rounded-lg bg-green-600 px-6 py-2 font-medium text-white transition hover:bg-green-700"
        >
          Download Your Product
        </a>

        <div className="mt-4">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 underline hover:text-gray-700"
          >
            Return to Store
          </Link>
        </div>
      </div>
    </div>
  );
}
