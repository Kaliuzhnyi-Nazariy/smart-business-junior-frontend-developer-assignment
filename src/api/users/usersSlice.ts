import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../TypesAndInterfaces/typesOrInterfaces";
import { fetchUsers } from "./usersOperations";

// export interface IUserState {
//   users: Array<IUser>;
// }

const initialState: IUserState = {
  users: [],
};

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
