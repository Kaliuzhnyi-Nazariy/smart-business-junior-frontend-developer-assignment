import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { AllUsers } from "../../TypesAndInterfaces/typesOrInterfaces";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = createAsyncThunk<AllUsers>(
  "users/fetchUsers",
  async (): Promise<AllUsers> => {
    const res = await axios.get("");
    return res.data;
  }
);
