import React from 'react';

interface TopMenuBarProps {
  onSearchChange: (searchText: string) => void;
}

function TopMenuBar({ onSearchChange }: TopMenuBarProps) {
  return (
    <div className="h-16 flex items-center justify-between px-4">
      <div className="flex items-center">

        <div className="border-l border-gray-300 h-8 mr-2"></div>
        <input
          type="text"
          placeholder="Search for posts"
          className="rounded-md px-2 pr-12 py-2 ml-4"
          maxLength={25}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>
      <div className="flex items-center">
        <button className="bg-gray-800 text-white rounded-full p-2 mr-4">
        </button>
      </div>
    </div>
  );
}

export default TopMenuBar;