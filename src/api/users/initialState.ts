import { IUserState } from "../../TypesAndInterfaces/typesOrInterfaces";

// export const initialState: IUserState = {
//   users: [],
//   filter: "",
// };

export const initialState: IUserState = {
  users: [],
  loading: false,
  error: null,
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};
