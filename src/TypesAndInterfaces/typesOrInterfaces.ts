export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export type IFilterUser = Omit<IUser, "id">;

export type AllUsers = Array<IUser>;

// export type IUserState = Array<IUser>;

export interface IUserState {
  users: Array<IUser>;
  loading: boolean;
  error: unknown | null;
  filter: IFilterUser;
}

// export interface IUserState {
//   users: Array<IUser>;
//   filter: "";
// }
