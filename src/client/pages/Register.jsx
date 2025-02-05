import React, { useState } from "react";

function formatPhoneNumber(value) {
  if (!value) return value;
  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneNumberLength = phoneNumber.length;
  if (phoneNumberLength < 4) return phoneNumber;
  if (phoneNumberLength < 8) {
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
  }
  return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(
    3,6)}-${phoneNumber.slice(6, 13)}`;
}

const Register = () => {
  const [inputValue, setInputValue] = useState("");
  const handleInput = (e) => {
    const formattedPhoneNumber = formatPhoneNumber(e.target.value);
    setInputValue(formattedPhoneNumber);
  };

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',    
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      console.log(inputValue)
  }


  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0">
      <div className="w-full sm:max-w-md p-5 mx-auto">
        <h2 className="mb-12 text-center text-5xl font-extrabold">
          Register Here.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlhtmlFor="email">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={formData.username}
              className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              placeholder="username"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlhtmlFor="email">
              Email-Address
            </label>
            <input
              id="email"
              type="text"
              name="email"
              value={formData.email}
              className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              placeholder="@mail.com"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlhtmlFor="email">
              Phone Number
            </label>
            <input
              onChange={(e) => handleInput(e)}
              value={inputValue}
              name="phone"
              className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              placeholder="(62)"              
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlhtmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              className="py-2 px-3 border border-gray-300 focus:border-sky-300 focus:outline-none focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              placeholder="Min 8 Character"
              onChange={handleChange}
            />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center"></div>
            <a href="#" className="text-sm">
              {" "}
              Forgot your password?{" "}
            </a>
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full inline-flex items-center justify-center px-4 py-2 bg-sky-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-sky-700 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-200 disabled:opacity-25 transition">
              Sign   In
            </button>
          </div>
          <div className="mt-6 text-center">
            <a href="/register" className="underline">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
