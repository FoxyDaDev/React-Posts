import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPost } from '../Store/postsSlice';
import Sidebar from '../components/Sidebar';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addPost(title, description, 'foxy123'));
    navigate('/');
  };

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 overflow-hidden p-32 bg-backgroundish">
        <div className="bg-backgroundish rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Create post</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="title">
                Title
              </label>
              <input
                type="text"
                id="title"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-greenish-hold"
                minLength={5} required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                Description
              </label>
              <textarea
                id="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mt-1 block w-full p-3 border border-gray-300 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-greenish-hold resize-y max-h-64 min-h-12"
                rows={4}
                minLength={5} required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-greenish text-white py-2 rounded-md font-medium hover:bg-greenish-hold"
            >
              Create Post
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;