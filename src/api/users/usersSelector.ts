import { IUser } from "../../TypesAndInterfaces/typesOrInterfaces";

export const selectUsers = (state: { users: { users: Array<IUser> } }) =>
  state.users.users;
