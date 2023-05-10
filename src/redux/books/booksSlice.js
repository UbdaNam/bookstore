import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: ({ books }, { payload }) => {
      const newBook = {
        title: payload.title,
        author: payload.author,
        id: books.length,
      };
      books.push(newBook);
    },
    removeBook: (state, { payload }) => {
      const bookId = payload;
      state.books = state.books.filter((book) => book.id !== bookId);
    },
  },
});

export default booksSlice.reducer;
