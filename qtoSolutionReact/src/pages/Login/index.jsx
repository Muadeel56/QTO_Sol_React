import React from 'react';
import { TextField, Button } from '@mui/material';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import backImg from '../../assets/images/login-bac-img.png'; // Ensure this path is correct

function Login() {
  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={backImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Black overlay */}
      </div>

      {/* Form Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8">
        <div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6 md:p-12 max-w-sm w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Login
          </h1>

          {/* Form */}
          <form className="space-y-6">
            {/* Email */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-gray-500 text-lg" />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-3">
              <FaLock className="text-gray-500 text-lg" />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-8">
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  textTransform: 'none',
                  padding: '12px 16px',
                  fontWeight: 'bold',
                  backgroundColor: '#ffc107',
                  color: '#000',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#ffb300'
                  }
                }}
              >
                Login
              </Button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-6 space-y-2">
            <a
              href="#forgot-password"
              className="text-yellow-400 hover:text-yellow-500 transition duration-300"
            >
              Forgot Password?
            </a>
            <p className="text-gray-600 mt-4">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="text-yellow-400 hover:text-yellow-500 transition duration-300"
              >
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
