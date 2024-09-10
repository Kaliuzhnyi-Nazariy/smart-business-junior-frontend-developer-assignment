import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./users/usersSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
