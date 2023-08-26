import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: // Initial state:
  [
    {
      itemid: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemid: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemid: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
export const { displayObject, addBooks, removeBooks } = booksSlice.actions;
