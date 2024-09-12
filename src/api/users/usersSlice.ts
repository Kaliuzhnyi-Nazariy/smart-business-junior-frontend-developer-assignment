import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations";
import { initialState } from "./initialState";

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const userReducer = usersSlice.reducer;
