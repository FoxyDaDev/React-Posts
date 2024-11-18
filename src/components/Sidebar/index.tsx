import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="w-80 h-screen rounded-lg">
      <div className="p-4 justify-items-center">
        <h1 className="text-2xl font-bold text-center">Posts</h1>
      </div>
      <div className="py-8">
        <Link
          to="/"
          className="flex items-center hover:bg-holdish p-6 hover:border-l-4 border-transparent hover:border-greenish-hold hover:text-greenish transition-all duration-100 ease-in-out"
        >
        <img width="24" height="24" src="/images/icons8-feed-24.png" alt="activity-feed" className="mr-2"/>
          Posts
        </Link>

        <Link 
          to="/my-posts" 
          className="flex items-center hover:bg-holdish p-6 hover:border-l-4 border-transparent hover:border-greenish-hold hover:text-greenish transition-all duration-100 ease-in-out"
        >
          <img src="/images/icons8-message-24.png" alt="My Posts Icon" className="mr-2" />
          My Posts
        </Link>
        
        <Link 
          to="/create-post" 
          className="flex items-center hover:bg-holdish p-6 hover:border-l-4 border-transparent hover:border-greenish-hold hover:text-greenish transition-all duration-100 ease-in-out"
        >
          <img src="/images/icons8-create-24.png" alt="Create Post Icon" className="mr-2" />
          Create Post
        </Link>
      </div>
    </div>
  );
}