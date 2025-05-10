import React, { useState } from "react";
import auth from "../assets/sign-in.png";
import logo from "../assets/logo.png";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    identifier: "", // username or email
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { identifier, password } = formData;
    if (!identifier || !password) {
      setError("Please fill in both fields.");
      return;
    }

    setError("");
    setSubmitted(true);
    console.log(formData);
    navigate("/profile");
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
      <div className=" w-full md:w-1/2 flex items-center justify-center md:justify-start px-5 md:px-10 lg:px-15 py-10 md:py-0">
        <div className="w-full max-w-md">
          <div className="flex w-full items-center justify-center">
            <img src={logo} alt="Logo" className="h-18 mb-2" />
          </div>
          <h2 className="text-center text-[28px] mb-0 poppins font-semibold text-black ">
            Welcome back
          </h2>
          <h2 className="text-center md:text-xl mt-0 poppins font-normal text-[#4D4E50] mb-5">
            Please enter your details
          </h2>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {submitted && (
            <div className="bg-green-100 text-green-700 p-3 mb-4 rounded text-sm">
              Successfully registered.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="identifier"
              placeholder="Enter your email"
              className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
              value={formData.identifier}
              onChange={handleChange}
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your Password"
                className="w-full pl-6 bg-white py-2 border outline-none text-[#6C7275] placeholder:text-[#6C7275] border-[#D3CDCD]"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <span
                className="absolute right-3 top-3 cursor-pointer text-sm text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOffIcon size={20} />
                ) : (
                  <EyeIcon size={20} />
                )}
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
                <span className="text-[#0B0A0A] text-base font-normal">
                  Remeber me
                </span>
              </div>
              <Link
                to="/forgot-password"
                className="text-[#009345] hover:underline"
              >
                Forgot password?{" "}
              </Link>
            </label>

            <button
              type="submit"
              className="w-full bg-[#009345] mt-2 mb-2 text-white py-2 rounded cursor-pointer hover:bg-green-500 transition"
            >
              Sign In
            </button>
          </form>
          <p className="text-base font-normal pl-7 text-[#000000] mb-6">
            Don’t have a PHC account?{" "}
            <Link to="/signup" className="text-[#009345] pl-2 hover:underline">
              Sign up
            </Link>
          </p>
          <div class="w-full mx-auto">
            <div class="flex items-center my-6">
              <div class="flex-grow border-t border-gray-300"></div>
              <span class="mx-4 text-[#151417] font-normal text-sm">
                or sign in with your work email
              </span>
              <div class="flex-grow border-t border-gray-300"></div>
            </div>
            <div class="flex justify-center space-x-6 mt-4">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                alt="Google"
                class="w-6 h-6"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
                alt="LinkedIn"
                class="w-6 h-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
