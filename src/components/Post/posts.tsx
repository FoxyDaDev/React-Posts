import React from 'react';
import { useSelector } from 'react-redux';
import Post from '.';
import { RootState } from '../../Store/store';

interface PostsProps {
  searchText: string;
}

function Posts({ searchText }: PostsProps) {
  const posts = useSelector((state: RootState) => state.posts.posts);

  const filteredPosts = posts.filter(post =>
    post.description.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div>
      {filteredPosts.length > 0 ? (
        filteredPosts.map((post) => (
          <Post
            key={post.id}
            author={post.author}
            content={post.description}
          />
        ))
      ) : (
        <p>No Posts found.</p>
      )}
    </div>
  );
}

export default Posts;