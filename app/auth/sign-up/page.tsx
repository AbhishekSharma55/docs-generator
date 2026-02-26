import { SignUpForm } from "@/components/sign-up-form";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        {/* <SignUpForm /> */}
        <h1 className="text-center text-3xl font-semibold">Sign Up is Disabled.</h1>
      <p className="text-center">Sign Up is disabled in this project , please contact project admin for more details.</p>
      <Link href="/auth/login" className="block text-center text-blue-500 hover:underline mt-4">Go to Login</Link>
      </div>
    </div>
  );
}
