import React from "react";
import { CiBoxList } from "react-icons/ci";
import { FaBox, FaHome, FaSearch } from "react-icons/fa";
const sidebar = ({handleFilterChange, filter,  filterText, handleInputFilterChange}) => {
  return (
    <>
      <div className="sidebar md:flex flex-col w-52 text-center bg-gray-200">
        <div className="text-gray-100 text-xl bg-sky-800 pt-1">
          <div className="p-2.5 mt-1 flex items-center pl-5">
            <h6 className="font-bold text-gray-100">Dashboard Menu</h6>
          </div>
        </div>
        <hr className="my-2 h-1 bg-sky-500" />
        <div className="p-2 mt-3 flex items-center rounded-md mx-2 duration-300 cursor-pointer bg-gray-700 text-white">
          <FaSearch className="ml-2" />
          <input
            type="text"
            placeholder="Search"
            value={filterText}
            onChange={handleInputFilterChange}
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2 mt-3 flex items-center rounded-md mx-2 px-4 duration-300 text-white">
          <CiBoxList className="text-gray-700" />
          <span className="text-[15px] ml-4 text-gray-700 font-bold">
            Category
          </span>
        </div>
        <div className="p-2 items-center rounded-md mx-2 px-4 duration-300 cursor-pointer text-white">
          <div className="flex items-center mb-2">
            <input
              id="default-radio-1"
              type="radio"
              value="all"
              checked={filter === 'all'}
              onChange={handleFilterChange}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              All
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-2"
              type="radio"
              value="shoes"
              checked={filter === 'shoes'}
              onChange={handleFilterChange}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              Shoes
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-3"
              type="radio"
              value="tshirt"
              checked={filter === 'tshirt'}
              onChange={handleFilterChange}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-3"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              T-Shirt
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-4"
              type="radio"
              value="levis"
              checked={filter === 'levis'}
              onChange={handleFilterChange}
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-4"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              Levis
            </label>
          </div>
        </div>
        <div className="p-2 mt-3 flex items-center rounded-md mx-2 px-4 duration-300 text-white">
          <CiBoxList className="text-gray-700" />
          <span className="text-[15px] ml-4 text-gray-700 font-bold">
            Price
          </span>
        </div>
        <div className="p-2 items-center rounded-md mx-2 px-4 duration-300 cursor-pointer text-white">
          <div className="flex items-center mb-2">
            <input
              id="default-radio-1"
              type="radio"
              value="u20"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-1"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              U-$20
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-2"
              type="radio"
              value="u15"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-2"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              U-$15
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-3"
              type="radio"
              value="u10"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-3"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              U-$10
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              id="default-radio-4"
              type="radio"
              value="u5"
              name="default-radio"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              htmlFor="default-radio-4"
              className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-700 cursor-pointer"
            >
              U-$5
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default sidebar;
