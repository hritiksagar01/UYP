import React, { useState } from 'react';
import '../styles/register.css';
import logo from '../assets/logo.png'; 
import axios from 'axios';

function Register() {
  const [step, setStep] = useState(1); // For tracking the current form step
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    age: '',
    college: '',
    paymentMethod: '',
    otp: '', // Field to store the OTP entered by the user
  });
  const [isOtpSent, setIsOtpSent] = useState(false); // Track if OTP is sent
  const [otpError, setOtpError] = useState(''); // To store OTP verification error messages
  const [isLoading, setIsLoading] = useState(false); // To track loading state for API requests

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Step 1: Send OTP to the provided email
  const handleSendOtp = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post('http://localhost/api/otp/generate', null, {
        params: { email: formData.email },
      });
      if (response.status === 200) {
        setIsOtpSent(true);
        setStep(step + 1); // Move to the next step after sending OTP
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
      alert('Failed to send OTP. Please check your email and try again.'); // Alert user about the error
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async () => {
    setIsLoading(true); // Set loading state to true
    try {
      const response = await axios.post('http://localhost/api/otp/verify', null, {
        params: {
          email: formData.email,
          otp: formData.otp,
        },
      });
      if (response.status === 200) {
        setOtpError('');
        setStep(step + 1); // OTP verified successfully, proceed to next step
      }
    } catch (error) {
      setOtpError('Invalid or expired OTP');
      console.error('Error verifying OTP:', error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  const handleNextStep = () => {
    if (step === 1) {
      handleSendOtp(); // On the first step, send OTP
    } else if (step === 2 && isOtpSent) {
      handleVerifyOtp(); // On the second step, verify OTP
    }
  };

  return (
    <div className="register-container">
      {/* Left-side image section */}
      <div className="image-section">
        <img src={logo} alt="Create Account" className="hero-image" />
      </div>

      {/* Right-side form section */}
      <div className="form-section">
        {step === 1 && (
          <div className="form-step">
            <h2>What's your email?</h2>
            <p>Don't worry, we won't tell anyone.</p>
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              required
            />
            <p className="email-note">
              Yes; United Youth Parliament may use and share my email to enable personalized advertising and to send me info about new releases, game updates, and events.
            </p>
            <button onClick={handleNextStep} className="next-button" disabled={isLoading}>
              {isLoading ? 'Sending...' : 'Send OTP'}
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="form-step">
            <h2>Enter OTP</h2>
            <p>We sent an OTP to {formData.email}</p>
            <input
              type="text"
              name="otp"
              placeholder="OTP"
              value={formData.otp}
              onChange={handleChange}
              className="input-field"
              required
            />
            {otpError && <p className="error-message">{otpError}</p>}
            <button onClick={handleNextStep} className="next-button" disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Verify OTP'}
            </button>
          </div>
        )}

        {step === 3 && (
          <div className="form-step">
            <h2>Complete Your Registration</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="number"
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="college"
              placeholder="College Name"
              value={formData.college}
              onChange={handleChange}
              className="input-field"
              required
            />
            <input
              type="text"
              name="paymentMethod"
              placeholder="Payment Method"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="input-field"
              required
            />
            <button onClick={handleNextStep} className="next-button" disabled={isLoading}>
              Submit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Register;
