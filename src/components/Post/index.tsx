import React from 'react';

interface PostProps {
  title: string;
  description: string;
  author: string;
}

function Post({ title, description, author }: PostProps) {
  return (
    <div className="bg-white rounded-lg p-4 px-8 mx-8 mb-4 py-8">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-gray-700 mb-2">{description}</p>
      <p className="text-gray-500 text-sm">By {author}</p>
    </div>
  );
}

export default Post;