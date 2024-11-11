import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/store';
import Post from '../components/Post';
import Sidebar from '../components/Sidebar';
import TopMenuBar from '../components/TopMenu';

function MyPosts() {
  const [searchText, setSearchText] = useState('');
  const posts = useSelector((state: RootState) => state.posts.posts);
  const userPosts = posts.filter(post => post.author === 'foxy123');

  const filteredPosts = userPosts.filter(post =>
    post.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="h-screen flex">
      <Sidebar />
      <div className="flex-1 overflow-hidden">
        <TopMenuBar onSearchChange={setSearchText} />
        <div className="h-full overflow-y-scroll p-4 bg-backgroundish">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post, index) => <Post key={index} {...post} />)
          ) : (
            <p>No posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyPosts;