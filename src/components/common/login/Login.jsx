import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState();
  const[showPassword,setShowPassword] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    role === "student" ? navigate("/student/home") : navigate("/trainee/home");
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-screen ">
      <div className="flex justify-end w-full p-4 pt-10 ">
        <button className="px-5 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 font-poppins">
          Signup
        </button>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-10 w-full lg:w-3/4 mx-auto pt-20">
        <div className="flex flex-col items-center lg:items-center lg:text-left text-center gap-10 lg:w-1/2">
          <h1 className="text-3xl lg:text-4xl text-gray-800 font-semibold font-poppins ">Welcome!</h1>
          <h3 className="text-xl lg:text-3xl text-gray-800 font-semibold font-poppins">
            Login to your account
          </h3>
          <div className="w-48 md:w-64 lg:w-[400px]">
            <img
              src="/loginPageImage.png"
              alt="Login Page"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        <div className="border p-6 md:p-10 w-full lg:w-[508px] rounded-lg shadow-lg bg-white">
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                Email
              </label>
              <input
                type="email"
                id="email"
                value="biyan12542@biowey.com"  
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="sahil@gmail.com"
                required
              />
            </div>

            <div className="mb-5 relative">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                value="12334345345"
                id="password"
                className="border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              />
              <button onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-12 transform -translate-y-1/2"
                type="button"
                >
                    {showPassword ? <img src='./notshowpassword.png'  className='h-5 w-5' alt='showpassword' /> : <img src='./showpassword.png'  className='h-5 w-5' alt='showpassword' />}
              </button>
            </div>

            <div className="mb-5 ">
              <label htmlFor="role" className="block mb-2 text-sm font-medium text-gray-900">
                Role
              </label>
              <select
                name="role"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="border    border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                required
              >
                <option   value="trainee">Trainee</option>
                <option value="student">Student</option>
              </select>
            </div>

            <div className="flex justify-end w-full items-center mb-5">
              {/* <button className="text-gray-500 hover:text-blue-500">
                Forgot Password?
              </button> */}
              <button
                type="submit"
                className="w-[132px] py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </button>
            </div>

            {/* <div className="flex  justify-center mt-10 gap-10">
              <p className='font-poppins'> Login With</p>
              <div className="flex justify-center gap-4">
                <button>
                  <img
                    src="/facebookLogo.png"
                    alt="Facebook Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
                <button>
                  <img
                    src="/GoogleLogo.png"
                    alt="Google Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
                <button>
                  <img
                    src="/linkedinLogo.png"
                    alt="LinkedIn Logo"
                    className="w-10 h-10 object-contain"
                  />
                </button>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
