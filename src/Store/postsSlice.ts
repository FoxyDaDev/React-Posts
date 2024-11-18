import { createSlice, PayloadAction, nanoid } from '@reduxjs/toolkit';

export interface Post {
  id: string;
  description: string;
  author: string;
}

export interface PostsState {
  posts: Post[];
  searchTerm: string;
}

const initialState: PostsState = {
  posts: [
    { id: nanoid(), description: '123123123', author: 'Jane Smith',},
    { id: nanoid(), description: 'awdawdawd', author: 'foxy123',},
    { id: nanoid(), description: 'basdbadawvw', author: 'foxy123',},

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
      prepare(description: string, author: string) {
        return {
          payload: {
            id: nanoid(),
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