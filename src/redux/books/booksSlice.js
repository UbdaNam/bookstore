import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: ({ books }, { payload }) => {
      const newBook = {
        title: payload.title,
        author: payload.author,
        category: payload.category,
        itemId: `item${books.length + 1}`,
      };
      books.push(newBook);
    },
    removeBook: (state, { payload }) => {
      const bookId = payload;
      state.books = state.books.filter((book) => book.itemId !== bookId);
    },
  },
});

export default booksSlice.reducer;
export const { removeBook, addBook } = booksSlice.actions;
