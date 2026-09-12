import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center bg-[#F7F3E7] px-5 py-16">

      <div className="w-full max-w-md bg-white p-8 shadow-lg sm:p-10">

        <div className="text-center">

          <div className="font-serif text-3xl font-bold text-[#103F2C]">
            Welcome Back
          </div>

          <p className="mt-2 text-xs text-gray-500">
            Login to your Maa Tadka account
          </p>

        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-8"
        >

          <label className="text-[10px] font-bold text-[#103F2C]">
            Email Address
          </label>

          <input
            type="email"
            className="mt-2 w-full border border-[#ddd6c5] px-4 py-3 text-xs outline-none focus:border-[#103F2C]"
            placeholder="you@example.com"
          />

          <label className="mt-5 block text-[10px] font-bold text-[#103F2C]">
            Password
          </label>

          <input
            type="password"
            className="mt-2 w-full border border-[#ddd6c5] px-4 py-3 text-xs outline-none focus:border-[#103F2C]"
            placeholder="••••••••"
          />

          <button className="mt-6 w-full bg-[#103F2C] py-4 text-[10px] font-bold uppercase tracking-wide text-white">
            Login
          </button>

        </form>

        <div className="mt-6 text-center text-xs text-gray-500">
          Don't have an account?{" "}
          <span className="font-bold text-[#9D211D]">
            Create Account
          </span>
        </div>

        <Link
          to="/"
          className="mt-5 block text-center text-[10px] font-bold uppercase text-[#103F2C]"
        >
          ← Back To Home
        </Link>

      </div>

    </main>
  );
}

export default Login;