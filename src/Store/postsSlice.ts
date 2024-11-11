import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  title: string;
  description: string;
  author: string;
}

export interface PostsState {
  posts: Post[];
  searchTerm: string;
}

const initialState: PostsState = {
  posts: [
    { id: nanoid(), title: 'Sample Post 1', description: 'Description for post 1', author: 'Jane Smith',},
    { id: nanoid(), title: 'Another Post', description: 'Description for post 2', author: 'foxy123',},
    { id: nanoid(), title: 'Another Post', description: 'Description for post 2', author: 'foxy123',},

  ],
  searchTerm: '',
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<Post>) {
        state.posts.push(action.payload);
      },
      prepare(title: string, description: string, author: string) {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            author,
            date: new Date().toISOString(),
          },
        };
      },
    },
    setSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
});

export const { addPost, setSearchTerm } = postsSlice.actions;
export default postsSlice.reducer;