import { createSelector } from "@reduxjs/toolkit";
import { IUser } from "../../TypesAndInterfaces/typesOrInterfaces";

export const selectUsers = (state: { users: { users: Array<IUser> } }) =>
  state.users.users;

// export const selectFilter = (state: { filter: unknown }) => state.filter;

export const selectFilterName = (state: {
  filter: { filter: { name: string } };
}) => state.filter.filter.name;

export const selectFilterUsername = (state: {
  filter: { filter: { username: string } };
}) => state.filter.filter.username;

export const selectFilterEmail = (state: {
  filter: { filter: { email: string } };
}) => state.filter.filter.email;

export const selectFilterPhone = (state: {
  filter: { filter: { phone: string } };
}) => state.filter.filter.phone;

export const usersFilteredName = createSelector(
  [selectUsers, selectFilterName],
  (users, filterValue) => {
    if (filterValue) {
      return users.filter((user) =>
        user.name.toLowerCase().includes(filterValue.toLowerCase())
      );
    } else {
      return users;
    }
  }
);

export const usersFilteredEmail = createSelector(
  [selectUsers, selectFilterEmail],
  (users, filterValue) => {
    return users.filter((user) =>
      user.email.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

export const usersFilteredUsername = createSelector(
  [selectUsers, selectFilterUsername],
  (users, filterValue) => {
    return users.filter((user) =>
      user.username.toLowerCase().includes(filterValue.toLowerCase())
    );
  }
);

export const usersFilteredPhone = createSelector(
  [selectUsers, selectFilterPhone],
  (users, filterValue) => {
    return users.filter((user) =>
      user.phone.replace(/\D/g, "").includes(filterValue)
    );
  }
);
