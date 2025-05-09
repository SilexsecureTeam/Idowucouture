import React, { useState } from 'react';
import auth from '../assets/sign-up.png'; 
import logo from '../assets/logo.png';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError('');
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, password, confirmPassword } = formData;

    if (!firstname || !lastname || !email || !phone || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(formData);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 h-[45vh] md:h-screen overflow-hidden">
              <img
                src={auth}
                alt="Auth visual"
                className="md:absolute top-0 left-0 w-full"
              />
            </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-5 md:px-10 lg:px-15 py-10 md:py-0">
        <div className="w-full max-w-md">
          <div className="flex w-full items-center justify-center">
            <img src={logo} alt="Logo" className="h-18 mb-2" />
          </div>
          <h2 className="text-center text-[28px] mb-0 poppins font-semibold text-black">Welcome Onboard</h2>
          <h2 className="text-center md:text-xl mt-0 poppins font-normal text-[#4D4E50] mb-5">Please enter your details</h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-sm">
              Successfully registered. <Link to="/login" className="underline text-green-800 font-semibold">Go to login</Link>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-2">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone Number"
              className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-sm text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </span>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-sm text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-[#009345] mt-3 mb-2 text-white py-2 rounded cursor-pointer hover:bg-green-500 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-base font-normal text-[#000000] mb-6">
            Already have a PHC account?
            <Link to="/login" className="text-[#009345] pl-2 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
