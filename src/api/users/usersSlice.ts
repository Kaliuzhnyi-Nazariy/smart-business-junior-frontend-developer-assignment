import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersOperations";
import { initialState } from "./initialState";
import { IUserState } from "../../TypesAndInterfaces/typesOrInterfaces";

const pendingHandler = (state: IUserState): void => {
  state.loading = true;
  state.error = null;
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsers.pending, (state) => {
        pendingHandler(state);
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const userReducer = usersSlice.reducer;
