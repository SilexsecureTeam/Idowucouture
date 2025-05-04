import React, { useState } from 'react';
import auth from '../assets/auth.png'; 
import logo from '../assets/logo.png';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    agree: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear error on change
    setError('');
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const { name, username, email, password, agree } = formData;
    if (!name || !username || !email || !password || !agree) {
      setError('Please fill in all fields and agree to the terms.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(formData);
    navigate('/login');
  };


  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 md:max-h-screen">
        <img
          src={auth}
          alt="Auth visual"
          className="h-full w-full object-cover object-center"
        />
        <img
          src={logo}
          alt="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 top-4 h-14"
        />
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-5 md:px-10 lg:px-15 py-10 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-[40px] poppins font-medium text-[#141718] mb-2">Sign up</h2>
          <p className="text-base font-normal text-[#6C7275] mb-6">
            Already have an account?{' '}
            <Link to='/login' className="text-[#38CB89] hover:underline">Sign in</Link>
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-sm">
              Successfully registered. <a href="/signin" className="underline text-green-800 font-semibold">
             <Link to='/login'> Go to login</Link></a>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="w-full px-1 py-2 border-b outline-none text-[#6C7275] placeholder:text-[#6C7275] border-b-[#6C7275]"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="w-full px-1 py-2 border-b outline-none text-[#6C7275] placeholder:text-[#6C7275] border-b-[#6C7275]"
              value={formData.username}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email address"
              className="w-full px-1 py-2 border-b outline-none text-[#6C7275] placeholder:text-[#6C7275] border-b-[#6C7275]"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full px-1 py-2 border-b outline-none text-[#6C7275] placeholder:text-[#6C7275] border-b-[#6C7275]"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-2.5 cursor-pointer text-sm text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon /> : <EyeIcon />}
              </span>
            </div>

            <label className="flex items-center mt-2 space-x-2 text-sm">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <span className="text-[#6C7275] text-base font-normal">
                I agree with{' '}
                <a href="#" className="text-[#141718] font-semibold hover:underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="text-[#141718] font-semibold hover:underline">
                  Terms of Use
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-800 transition"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
