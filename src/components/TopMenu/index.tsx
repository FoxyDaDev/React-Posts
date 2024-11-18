import React from 'react';

interface TopMenuBarProps {
  onSearchChange: (searchText: string) => void;
}

function TopMenuBar({ onSearchChange }: TopMenuBarProps) {
  return (
    <div className="h-16 flex items-center justify-between pr-4">
      <div className="flex items-center ">

        <div className="border-l border-gray-300 h-8 mr-2"></div>
        <input
          type="text"
          placeholder="Search for posts"
          className="rounded-md px-2 pr-12 py-2 ml-2 focus:outline-none"
          maxLength={25}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center">
      <img width="26" height="26" src="https://img.icons8.com/puffy-filled/32/user.png" alt="user" className="mr"/>
        <p className='pr-4 pl-1'>foxy123</p>
        <button className="bg-backgroundish text-greenish-hold rounded-full p-2 mr-4 w-10 h-10 border-roundish border-2 pb-8 font-semibold">
          FX
        </button>
      </div>
    </div>
  );
}

export default TopMenuBar;