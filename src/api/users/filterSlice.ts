import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    updateFilterName(state, action) {
      state.filter.name = action.payload;
    },
    updateFilterUsername(state, action) {
      state.filter.username = action.payload;
    },
    updateFilterEmail(state, action) {
      state.filter.email = action.payload;
    },
    updateFilterPhone(state, action) {
      state.filter.phone = action.payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const {
  updateFilterName,
  updateFilterEmail,
  updateFilterUsername,
  updateFilterPhone,
} = filterSlice.actions;
