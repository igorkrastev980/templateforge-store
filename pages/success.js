import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function Success() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4">
      <CheckCircle size={72} className="text-green-500 mb-6" />
      <h1 className="text-3xl font-bold mb-4">Payment Successful 🎉</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        Thank you for your purchase! Your template is being prepared and you’ll receive an email with the download link shortly.
      </p>
      <Link href="/" className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
        Back to Home
      </Link>
    </div>
  );
}
