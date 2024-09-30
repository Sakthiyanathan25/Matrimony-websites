// LoginForm.jsx
import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle normal login logic here
    console.log('Normal login submitted:', { username, password });
    // Implement your authentication logic (e.g., API call)
  };

  const handleGoogleSuccess = (credentialResponse) => {
    console.log('Google login successful:', credentialResponse);
    const { credential } = credentialResponse;
    // Send the credential to your backend for verification and authentication
    // Example:
    // fetch('/api/auth/google', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ token: credential }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   // Handle successful authentication
    // })
    // .catch(error => {
    //   console.error('Error:', error);
    // });
  };

  const handleGoogleFailure = () => {
    console.error('Google login failed');
    // Optionally, display an error message to the user
  };

  return (
    <div className="flex justify-center items-center md:h-[400px] h-[300px]">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">Sign in</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username or Email or Phone no."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md  text-black font-font focus:outline-none focus:border-blue-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}

            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border  text-black font-roboto border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="my-4 flex items-center">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-500">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>
        <GoogleLogin
          onSuccess={handleGoogleSuccess}
          onError={handleGoogleFailure}
          useOneTap
          // Optionally, customize the button appearance
          // For full customization, you might need to implement a custom button
        />
      </div>
    </div>
  );
};

export default LoginForm;
