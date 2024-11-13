import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";


const LoginPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 shadow-md rounded-lg w-full max-w-md">
        <header className="text-center">
          {/* Custom prompt logo */}
          <div
            title="Uncharted Mag"
            id="custom-prompt-logo"
            className="mx-auto"
            style={{
              width: 'auto',
              height: '60px',
              position: 'static',
              backgroundColor: 'transparent',
              backgroundPosition: 'center',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          ></div>

          {/* Logo image */}
          <img
            className="mx-auto mb-6 w-32"
            id="prompt-logo-center"
            src="https://accountsystemstorageprod.blob.core.windows.net/custom-ui/SubmitLogo.svg"
            alt="Uncharted Mag"
          />

          {/* Heading */}
          <h1 className="text-2xl font-bold">Welcome</h1>

          {/* Subheading */}
          <div className="mt-2">
            <p className="text-gray-600">
              Log in to Uncharted Mag to continue to Submittable.
            </p>
          </div>
        </header>

        {/* Form */}
        <div className="mt-6">
          <form method="POST" className="space-y-6">
            {/* Email input */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Email address
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                inputMode="email"
                name="username"
                id="username"
                type="text"
                required
                autoComplete="email"
                spellCheck="false"
                autoFocus
              />
            </div>

            {/* Submit button */}
            <div>
              <button
                type="submit"
                className="w-full bg-[#bf0000] h-12 text-white py-2 rounded-md hover:opacity-50 transition"
              >
                Continue
              </button>
            </div>
          </form>
        </div>

        {/* Footer: Sign-up link */}
        <div className="text-center mt-4">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a
              href="/u/signup/identifier"
              className="text-blue-600 hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>

        {/* Or divider */}
        <div className="my-4 text-center relative">
          <span className="bg-white px-2 text-gray-500">Or</span>
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
        </div>

        {/* Google and Facebook Login */}
        <div className="space-y-4">
          {/* Google button */}
          <div className="flex items-center justify-center ">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 w-full dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <FcGoogle className=' text-3xl'/>
              <span>Continue with Google</span>
            </button>
          </div>

          {/* Facebook button */}
          <div className="flex items-center justify-center w-96">
            <button className="px-4 py-2 border flex gap-2 border-slate-200 w-full dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
            <FaFacebook className='text-3xl'/>
              <span>Continue with Facebook</span>
            </button>
          </div>
        </div>

        {/* Help link */}
        <div className="text-center mt-6">
          <a
            href="https://www.submittable.com/contact/"
            className="text-gray-500 hover:underline"
          >
            Help
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
