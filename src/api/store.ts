import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/usersSlice";
import { filterReducer } from "./users/filterSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    filter: filterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
