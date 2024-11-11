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
          className="block hover:bg-holdish p-6 hover:border-l-4 hover:border-greenish-hold hover:text-greenish"
        >
          Posts
        </Link>
        <Link 
          to="/my-posts" 
          className="block hover:bg-holdish p-6 hover:border-l-4 hover:border-greenish-hold hover:text-greenish"
        >
          My Posts
        </Link>
        <Link 
          to="/create-post" 
          className="block hover:bg-holdish p-6 hover:border-l-4 hover:border-greenish-hold hover:text-greenish"
        >
          Create Post
        </Link>
      </div>
    </div>
  );
}