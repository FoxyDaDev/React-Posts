import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../Store/postsSlice';
import Sidebar from '../components/Sidebar';

function CreatePost() {
  const [content, setContent] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost(content, 'foxy123'));
    navigate('/');
  };

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 flex justify-center items-center bg-backgroundish">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full mx-4">
          <h1 className="text-2xl font-semibold mb-4">Create a post</h1>
          <div className="flex items-start mb-4">
            <img
              width="32"
              height="32"
              src="https://img.icons8.com/puffy-filled/32/user.png"
              alt="user"
            />
            <p className="text-l font-semibold ml-2">foxy123</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              placeholder="Write your post here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-3 text-gray-700 bg-white focus:outline-none resize-none min-h-32"
              rows={6}
              maxLength={350}
              required
            />
            <hr></hr>
            <div className="text-right">
              <button
                type="submit"
                className="bg-greenish text-white py-4 px-8 rounded-full hover:bg-greenish-hold font-semibold"
              >
                Share Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;