import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categorySort: "",
};

const sortApiSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    setCategorySort(state, action) {
      state.categorySort = action.payload;
    },
  },
});

export const { setCategorySort } = sortApiSlice.actions;
export default sortApiSlice.reducer;
