import React from 'react';
import { TextField, Button } from '@mui/material';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import backImg from '../../assets/images/login-bac-img.png'; // Ensure this path is correct

function Register() {
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
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 max-w-sm w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Register
          </h1>

          {/* Form */}
          <form className="space-y-4">
            {/* First Name */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="First Name"
                placeholder="Enter your first name"
              />
            </div>

            {/* Last Name */}
            <div className="flex items-center space-x-2">
              <FaUser className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Last Name"
                placeholder="Enter your last name"
              />
            </div>

            {/* Email */}
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Enter your email"
                type="email"
              />
            </div>

            {/* Password */}
            <div className="flex items-center space-x-2">
              <FaLock className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Enter your password"
                type="password"
              />
            </div>

            {/* Confirm Password */}
            <div className="flex items-center space-x-2">
              <FaLock className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                placeholder="Confirm your password"
                type="password"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-6">
              <Button
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  textTransform: 'none',
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  backgroundColor: '#ffc107', // Yellow color for consistency
                  color: '#000',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#ffb300'
                  }
                }}
              >
                Register
              </Button>
            </div>
          </form>

          {/* Additional Links */}
          <div className="mt-6 text-sm text-gray-600">
            <p>
              Already have an account?{' '}
              <Link to="/login" className="text-yellow-400 hover:text-yellow-500 transition duration-300">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
