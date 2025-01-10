import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url'; // Ensure this import is correct

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${URL}/api/auth/register`, { // Ensure URL is correctly used
        email,
        username,
        password,
      });
      navigate('/login');
    } catch (err) {
      setError(true);
      console.log(err.response ? err.response.data : err); // Modify this line to log the error response
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-[90%] md:w-[30%]">
        <div className="text-center mb-4">
          <img
            src="your-logo.png"
            alt="Logo"
            className="mx-auto h-12 mb-4"
          />
          <h1 className="text-2xl font-bold mb-2">Create Your Account</h1>
          <p className="text-sm text-gray-600">
            Sign up to Uncharted Mag to continue to Submittable.
          </p>
        </div>
        <form method="POST" onSubmit={handleSignUp} className="space-y-4">
          <input
            type="text"
            name="email"
            id="email"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            name="username"
            id="username"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md focus:outline-none"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-[#bf0000] text-white py-2 rounded-md hover:opacity-60"
          >
            Continue
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-center mt-2">Something went wrong. Please try again.</p>
        )}
        <div className="text-center mt-4">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Log in
            </Link>
          </p>
        </div>
        <div className="text-center mt-4">
          <p className="text-gray-500">
            <Link to="/terms" className="text-blue-500 hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link to="/privacy" className="text-blue-500 hover:underline">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
