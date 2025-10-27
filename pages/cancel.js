import Link from "next/link";
import { XCircle } from "lucide-react";

export default function Cancel() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <XCircle size={72} className="text-red-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Payment Canceled</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Your payment was not completed. Don’t worry, you can try again at any time.
      </p>
      <Link href="/" className="bg-gray-800 text-white px-6 py-3 rounded-xl hover:bg-gray-900 transition">
        Back to Home
      </Link>
    </div>
  );
}
