import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

const baseURL =
  "https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi";
const appId = "NsLluZghb91MCAXDWUd8";

const initialState = {
  books: [],
  status: "idle",
};

export const getBooks = createAsyncThunk("books/getBooks", async () => {
  const { data } = await axios.get(`${baseURL}/apps/${appId}/books`);
  const changeData = Object.entries(data).map((entry) => {
    const [bookId, [book]] = entry;
    book.itemId = bookId;
    return entry[1][0];
  });
  return changeData;
});

export const addBook = createAsyncThunk(
  "books/addBook",
  async ({ title, author, category }, { dispatch }) => {
    await axios.post(`${baseURL}/apps/${appId}/books`, {
      item_id: uuidv4(),
      title,
      author,
      category,
    });
    dispatch(getBooks());
  }
);

export const removeBook = createAsyncThunk(
  "books/removeBook",
  async (itemId, { dispatch }) => {
    await axios.delete(`${baseURL}/apps/${appId}/books/${itemId}`, {
      itemId,
    });
    dispatch(getBooks());
  }
);

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {},
  extraReducers: {
    [getBooks.pending]: (state) => {
      state.status = "pending";
    },
    [getBooks.fulfilled]: (state, { payload }) => {
      state.status = "fulfilled";
      state.books = payload || [];
      state.status = "idle";
    },
    [getBooks.rejected]: (state) => {
      state.status = "rejected";
    },
    [addBook.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [addBook.rejected]: (state) => {
      state.status = "rejected";
    },
    [addBook.pending]: (state) => {
      state.status = "pending";
    },
    [removeBook.fulfilled]: (state) => {
      state.status = "fulfilled";
    },
    [removeBook.pending]: (state) => {
      state.status = "pending";
    },
    [removeBook.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default booksSlice.reducer;
