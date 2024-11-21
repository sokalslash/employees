import { configureStore } from "@reduxjs/toolkit";

import staff from "./appSlice";
import filter from "@/features/employee/filter/api/filterApiSlice";
import sort from "@/features/employee/sort/api/sortApiSlice";

export const store = configureStore({
  reducer: {
    filter,
    sort,
    staff,
  },
});

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
