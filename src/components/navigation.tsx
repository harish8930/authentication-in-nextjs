import {
  SignInButton,
  SignOutButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="bg-black border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo / Title */}
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-2xl font-bold text-white hover:text-gray-300 transition-colors duration-200">
                Next.js App
              </span>
            </Link>
          </div>

          {/* Auth & Nav Links */}
          <div className="flex items-center gap-6">
            <SignedOut>
              <SignInButton>
                <button className="text-white bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md transition-colors duration-200">
                  Sign In
                </button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <Link
                href="/user-profile"
                className="text-gray-300 hover:text-white transition-colors duration-200"
              >
                Profile
              </Link>
              <SignOutButton>
                <button className="text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded-md transition-colors duration-200">
                  Sign Out
                </button>
              </SignOutButton>
            </SignedIn>
          </div>
        </div>
      </div>
    </nav>
  );
};
