import React from "react";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="bg-white p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-[#2B3674]">Overview</h1>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search for something"
            className="pl-10 pr-4 py-2 bg-[#F4F7FE] rounded-lg w-64 focus:outline-none"
          />
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <Cog6ToothIcon className="h-6 w-6 text-gray-600" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <BellIcon className="h-6 w-6 text-gray-600" />
        </button>

        <img
          src="/profile.jp"
          alt="Profile"
          className="h-10 w-10 rounded-full object-cover"
        />
      </div>
    </header>
  );
};

export default Header;
