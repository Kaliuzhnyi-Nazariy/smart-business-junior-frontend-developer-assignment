import { IUserState } from "../../TypesAndInterfaces/typesOrInterfaces";

// export const initialState: IUserState = {
//   users: [],
//   filter: "",
// };

export const initialState: IUserState = {
  users: [],
  filter: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};
