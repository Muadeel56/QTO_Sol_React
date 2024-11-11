import React from 'react';
import { TextField, Button } from '@mui/material';
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBuilding,
  FaFileUpload,
  FaClipboardList,
  FaCalendarAlt
} from 'react-icons/fa';
import backImg from '../../assets/images/login-bac-img.png';

function Quote() {
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
        <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 md:p-12 max-w-3xl w-full">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            Get Free Quote
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

            {/* Phone Number */}
            <div className="flex items-center space-x-2">
              <FaPhone className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Phone Number"
                placeholder="Enter your phone number"
                type="tel"
              />
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Address"
                placeholder="Enter your address"
              />
            </div>

            {/* Company Name */}
            <div className="flex items-center space-x-2">
              <FaBuilding className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Company Name"
                placeholder="Enter your company name"
              />
            </div>

            {/* Number of Drawings */}
            <div className="flex items-center space-x-2">
              <FaClipboardList className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Number of Drawings"
                placeholder="Enter the number of drawings"
                type="number"
              />
            </div>

            {/* Target Number of Days */}
            <div className="flex items-center space-x-2">
              <FaCalendarAlt className="text-gray-500" />
              <TextField
                fullWidth
                variant="outlined"
                label="Target Number of Days"
                placeholder="Enter target number of days"
                type="number"
              />
            </div>

            {/* File Upload */}
            <div className="flex flex-col space-y-2">
              <label className="flex items-center space-x-2 text-gray-700">
                <FaFileUpload className="text-gray-500 text-2xl" />
                <span className="font-semibold">Upload File</span>
              </label>
              <Button
                variant="outlined"
                component="label"
                sx={{
                  padding: '10px 16px',
                  fontWeight: 'bold',
                  borderColor: '#ffc107',
                  color: '#ffc107',
                  '&:hover': {
                    borderColor: '#ffb300',
                    backgroundColor: '#fff8e1'
                  }
                }}
              >
                Choose File
                <input type="file" hidden />
              </Button>
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
                  backgroundColor: '#ffc107', // Yellow color
                  color: '#000',
                  borderRadius: '8px',
                  '&:hover': {
                    backgroundColor: '#ffb300'
                  }
                }}
              >
                Get Free Quote
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Quote;
