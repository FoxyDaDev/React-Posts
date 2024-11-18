import React from "react";

interface PostProps {
  author: string;
  content: string;
}

function Post({ author, content }: PostProps) {
  return (
    <div className="bg-white rounded-lg shadow p-4 px-6 mx-8 mb-4 py-6 flex items-start">
      <img width="32" height="32" src="https://img.icons8.com/puffy-filled/32/user.png" alt="user" className="mr-2"/>
      <div className="flex-1">
        <div className="mb-2">
          <h2 className="font-bold text-gray-800">{author}</h2>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export default Post;