import React, { useState, useEffect } from "react";

import { motion, useAnimation } from 'framer-motion';

const Payment = () => {
    
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        fulladdress : '',
        paydebit: '',
        paymethod: '',
        shipping: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const redoStep = () => {
        setStep(1);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="sm:flex shadow-md my-10">
          <div className="w-full sm:w-3/4 bg-gray-700 px-10 py-10">
            <div className="flex justify-between border-b pb-8">
              <h1 className="font-semibold text-2xl text-gray-50">Please fill to complete payment</h1>
              {/* <h2 className="font-semibold text-2xl text-gray-50">3 Items</h2> */}
            </div>            
            <form onSubmit={handleSubmit} className="mt-12 md:w-4/5 mx-auto rounded-3xl">
              {step === 1 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-4/5 mx-auto py-12">
                            <div className="text-base text-gray-50 text-center  ">
                                Step 1/2
                            </div>
                            <div className="mt-4 w-full h-2 rounded-3xl" style={{ backgroundColor: '#f5f6fa'}}>
                                <div className="h-full bg-sky-700 rounded-3xl w-1/3"></div>
                            </div>                            

                            <div>
                                {/* Name input field */}
                                <input
                                    type="text"
                                    placeholder="Name"
                                    name="name" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.name} // This correctly points to formData.name
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Number input field */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.email} // This should point to formData.number
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Occupation input field */}
                            <div>
                                <input
                                    type="phone"
                                    placeholder="Phone Number"
                                    name="phone"
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.number}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <textarea                                    
                                    placeholder="Your Address"
                                    name="address"
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex justify-end">
                                <button type="button" onClick={nextStep} className="mt-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Next
                                </button>
                            </div>
                        </motion.div>
                    )}
                    {step === 2 && (
                        <motion.div
                            key={step} // Add this line
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="md:w-4/5 mx-auto py-12">
                            <div className="text-base text-gray-50 text-center  ">
                                Step 2/2
                            </div>
                            <div className="mt-4 w-full h-2 rounded-3xl" style={{ backgroundColor: '#f5f6fa'}}>
                                <div className="h-full bg-sky-700 rounded-3xl w-1/3"></div>
                            </div>                            

                            <div>
                                {/* Name input field */}
                                <input
                                    type="text"
                                    placeholder="fulladdress"
                                    name="fulladdress" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.fulladdress} // This correctly points to formData.name
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Number input field */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Paydebit"
                                    name="paydebit" // This should match your formData property
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.paydebit} // This should point to formData.number
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Occupation input field */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Pay Method"
                                    name="paymethod"
                                    className="mt-4 w-full border border-gray-300 rounded p-2 focus:outline-none"
                                    style={{ backgroundColor: '#f5f6fa'}}
                                    value={formData.paymethod}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="flex flex-col flex-1 mt-4">
                                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2">
                                    <div className="relative flex w-full max-w-mxl flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="shipping" />
                                            <div className="max-w-xl rounded-md bg-white dark:bg-gray-900 p-5 text-gray-600 dark:text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between">
                                                <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">DHL</p>
                                                <div>
                                                    <svg className="text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                </div>
                                                </div>
                                                <div className="flex items-end justify-between">
                                                <p><span className="text-lg font-bold">1 Week</span></p>
                                                <p className="text-sm font-bold">$26</p>
                                                </div>
                                            </div>
                                            </div>
                                        </label>
                                    </div>
                                    <div className="relative flex w-full max-w-mxl flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                                        <label className="cursor-pointer">
                                            <input type="radio" className="peer sr-only" name="shipping" />
                                            <div className="max-w-xl rounded-md bg-white dark:bg-gray-900 p-5 text-gray-600 dark:text-gray-300 ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center justify-between">
                                                <p className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-400">DHL</p>
                                                <div>
                                                    <svg className="text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                                                </div>
                                                </div>
                                                <div className="flex items-end justify-between">
                                                <p><span className="text-lg font-bold">1 Week</span></p>
                                                <p className="text-sm font-bold">$26</p>
                                                </div>
                                            </div>
                                            </div>
                                        </label>
                                    </div>
                                </div>      
                            </div>
                            <div className="flex justify-center mt-12">
                                <button type="button" onClick={prevStep} className=" mr-4 bg-black text-white font-bold py-2 px-4 rounded">
                                    Previous
                                </button>
                                <button type="submit" className=" bg-black text-white font-bold py-2 px-4 rounded">
                                    Submit
                                </button>
                            </div>
                        </motion.div>
                    )}
              </form>
            <a
              href="#"
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              <svg
                className="fill-current mr-2 text-indigo-600 w-4"
                viewBox="0 0 448 512"
              >
                <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
              </svg>
              Continue Shopping
            </a>
          </div>
          <div id="summary" className=" w-full sm:w-1/4 md:w-1/2 px-8 py-10 bg-gray-200">
            <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
            <div className="flex justify-between mt-10 mb-5">
              <span className="font-semibold text-sm uppercase">Items 3</span>
              <span className="font-semibold text-sm">590$</span>
            </div>
            <div>
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 bg-gray-50 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlhtmlFor="promo"
                className="font-semibold inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">
              Apply
            </button>
            <div className="border-t mt-8">
              <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                <span>Total cost</span>
                <span>$600</span>
              </div>
              <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
