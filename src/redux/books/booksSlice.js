import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: // Initial state:
  [],
  isLoading: false,
  isError: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    displayObject: (state) => state.books,
    addBooks: (state, action) => {
      state.books.push(action.payload);
    },
    removeBooks: (state, action) => {
      state.books = state.books.filter((book) => book.item_id !== action.payload);
    },
  },
});

export default booksSlice.reducer;
export const { displayObject } = booksSlice.actions;
