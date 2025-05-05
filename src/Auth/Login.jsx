import React, { useState } from 'react';
import auth from '../assets/sign-in.png'; 
// import logo from '../assets/logo.png';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: '', // username or email
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);
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

    const { identifier, password } = formData;
    if (!identifier || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setError('');
    setSubmitted(true);
    console.log(formData);
    navigate('/'); 
  };

  return (
    <div className="min-h-screen md:max-h-screen flex flex-col md:flex-row">
      {/* Left side - Image */}
      <div className="relative w-full md:w-1/2 ">
        <img
          src={auth}
          alt="Auth visual"
          className="sm:h-full h-1/2 w-full object-cover md:object-fill object-center"
        />
        {/* <img
          src={logo}
          alt="Logo"
          className="absolute left-1/2 transform -translate-x-1/2 top-4 h-14"
        /> */}
      </div>

      {/* Right side - Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center md:justify-start px-5 md:px-10 lg:px-15 py-10 md:py-0">
        <div className="w-full max-w-md">
          <h2 className="text-2xl md:text-[40px] poppins font-medium text-[#141718] mb-2">Sign In</h2>
          <p className="text-base font-normal text-[#6C7275] mb-6">
            Don’t have an account?{' '}
            <Link to='/signup' className="text-[#38CB89] hover:underline">Sign up</Link>
          </p>

          {error && (
            <p className="text-red-500 text-sm mb-4">{error}</p>
          )}
          {submitted && (
                      <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-sm">
                        Successfully registered.
                      </div>
                    )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="identifier"
              placeholder="Username or Email"
              className="w-full px-1 py-2 border-b outline-none text-[#6C7275] placeholder:text-[#6C7275] border-b-[#6C7275]"
              value={formData.identifier}
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
     
            <label className="flex items-center justify-between w-full mt-2 space-x-2 text-sm">
              <div className="flex items-center gap-x-3">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                className="cursor-pointer"
              />
              <span className="text-[#6C7275] text-base font-normal">
                Remeber me
              </span>
              </div>
                <Link to="/forgot-password" className="text-[#38CB89] hover:underline">
                    Forgot password? </Link>
            </label>

            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded cursor-pointer hover:bg-gray-800 transition"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
