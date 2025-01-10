import React, { useState, useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import { UserContext } from '../context/UserContext';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URL + "/api/auth/login", { email, password }, { withCredentials: true });
      setUser(res.data);
      navigate("/");
    } catch (err) {
      setError(true);
      console.log(err);
    }
  };

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
          <form method="POST" className="space-y-6" onSubmit={handleLogin}>
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
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password input */}
            <div>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                name="password"
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
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
          {error && <p className="text-red-500 text-sm mt-2">Invalid email or password</p>}
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
