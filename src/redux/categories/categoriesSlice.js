import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStaus: (state) => {
      state.status = 'Under construction';
    },
  },
});

export default categoriesSlice.reducer;
