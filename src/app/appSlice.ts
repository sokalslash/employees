import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { Employee } from "@/entities/employee";
import { baseQuery } from "./baseQuery";

interface IStaffState {
  list: Array<Employee>;
  status: string;
}

interface IfetchStaff {
  sort?: string;
  filter?: string;
  isArchive?: boolean;
}

const initialState: IStaffState = {
  list: [],
  status: "loading",
};

export const fetchStaff = createAsyncThunk(
  "staff/fetchStaff",
  async ({ sort, filter, isArchive }: IfetchStaff) => {
    const response = await baseQuery(
      isArchive
        ? `${sort}&${filter}&isArchive=${isArchive}`
        : `${sort}&${filter}`
    );

    return response;
  }
);

const appSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    addStaff(state, action) {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchStaff.pending, (state) => {
        state.status = "loading";
        state.list = [];
      })
      .addCase(fetchStaff.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchStaff.rejected, (state) => {
        state.status = "failed";
        state.list = [];
      });
  },
});

export const { addStaff } = appSlice.actions;
export default appSlice.reducer;
