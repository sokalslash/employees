import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesFilter: {
    typeFilter: "",
    isArchive: false,
  },
};

const filterApiSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setTypeFilter(state, action) {
      state.categoriesFilter.typeFilter = action.payload;
    },
    setIsArchive(state, action) {
      state.categoriesFilter.isArchive = action.payload;
    },
  },
});

export const { setTypeFilter, setIsArchive } = filterApiSlice.actions;
export default filterApiSlice.reducer;
