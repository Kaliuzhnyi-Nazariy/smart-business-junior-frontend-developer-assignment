import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { fetchUsers } from "../api/users/usersOperations";
import { useSelector } from "react-redux";
import {
  usersFilteredEmail,
  selectUsers,
  usersFilteredName,
  usersFilteredUsername,
  usersFilteredPhone,
  selectIsLoading,
} from "../api/users/usersSelector";
import { IUser } from "../TypesAndInterfaces/typesOrInterfaces";
// import {
//   updateFilterEmail,
//   updateFilterName,
//   updateFilterPhone,
//   updateFilterUsername,
// } from "../api/users/filterSlice";
import Input from "./Input";

const Table = () => {
  const dispatch = useAppDispatch();
  const [usersList, setUsersList] = useState([] as IUser[]);
  const [positionName, setpositionName] = useState("down");
  const [positionUsername, setpositionUsername] = useState("down");
  const [positionEmail, setpositionEmail] = useState("down");
  const [positionPhone, setpositionPhone] = useState("down");

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    console.log(isLoading);
  }, [isLoading]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const NameUsers = useSelector(usersFilteredName);
  const UsernameUsers = useSelector(usersFilteredUsername);
  const EmailUsers = useSelector(usersFilteredEmail);
  const PhoneUsers = useSelector(usersFilteredPhone);

  useEffect(() => {
    setUsersList(NameUsers);
  }, [NameUsers]);

  useEffect(() => {
    setUsersList(UsernameUsers);
  }, [UsernameUsers]);

  useEffect(() => {
    setUsersList(EmailUsers);
  }, [EmailUsers]);

  useEffect(() => {
    setUsersList(PhoneUsers);
  }, [PhoneUsers]);

  useEffect(() => {
    if (!usersList) {
      setUsersList(users);
    }
  }, [users, usersList]);

  const handleSoritng = (type: string) => {
    switch (type) {
      case "name":
        setpositionUsername("down");
        setpositionEmail("down");
        setpositionPhone("down");

        if (positionName === "down") {
          const sortedUsersByName = [...usersList].sort((a, b) =>
            b.name.localeCompare(a.name)
          );
          setUsersList(sortedUsersByName);
          setpositionName("up");
        } else {
          const sortedUsersByName = [...usersList].sort((a, b) =>
            a.name.localeCompare(b.name)
          );
          setUsersList(sortedUsersByName);
          setpositionName("down");
        }
        break;

      case "username":
        setpositionName("down");
        setpositionEmail("down");
        setpositionPhone("down");

        if (positionUsername === "down") {
          const sortedUsersByUsername = [...usersList].sort((a, b) =>
            b.username.localeCompare(a.username)
          );
          setUsersList(sortedUsersByUsername);
          setpositionUsername("up");
        } else {
          const sortedUsersByUsername = [...usersList].sort((a, b) =>
            a.username.localeCompare(b.username)
          );
          setUsersList(sortedUsersByUsername);
          setpositionUsername("down");
        }
        break;

      case "email":
        setpositionName("down");
        setpositionUsername("down");
        setpositionPhone("down");

        if (positionEmail === "down") {
          const sortedUsersByEmail = [...usersList].sort((a, b) =>
            b.email.localeCompare(a.email)
          );
          setUsersList(sortedUsersByEmail);
          setpositionEmail("up");
        } else {
          const sortedUsersByEmail = [...usersList].sort((a, b) =>
            a.email.localeCompare(b.email)
          );
          setUsersList(sortedUsersByEmail);
          setpositionEmail("down");
        }

        break;

      case "phone":
        setpositionName("down");
        setpositionUsername("down");
        setpositionEmail("down");

        if (positionPhone === "down") {
          const sortedUsersByPhone = [...usersList].sort((a, b) => {
            const phoneA = a.phone.replace(/\D/g, "");
            const phoneB = b.phone.replace(/\D/g, "");
            return phoneB.localeCompare(phoneA);
          });
          setUsersList(sortedUsersByPhone);
          setpositionPhone("up");
        } else {
          const sortedUsersByPhone = [...usersList].sort((a, b) => {
            const phoneA = a.phone.replace(/\D/g, "");
            const phoneB = b.phone.replace(/\D/g, "");
            return phoneA.localeCompare(phoneB);
          });
          setUsersList(sortedUsersByPhone);
          setpositionPhone("down");
        }

        break;
      default:
        break;
    }
  };

  const [previousField, setPreviousField] = useState<string>("");

  return (
    <div className="">
      {/* <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          dispatch(updateFilterName(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          dispatch(updateFilterEmail(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="username"
        onChange={(e) => {
          dispatch(updateFilterUsername(e.target.value));
        }}
      />
      <input
        type="text"
        placeholder="phone"
        onChange={(e) => {
          dispatch(updateFilterPhone(e.target.value));
        }}
      /> */}

      <table>
        <thead>
          <tr>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              name
              <button onClick={() => handleSoritng("name")}>
                {positionName === "down" ? "🔻" : "🔼"}
              </button>
              {/* <Input inputField="name" /> */}
              <Input
                inputField="name"
                previousField={previousField}
                setPreviousField={setPreviousField}
              />
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              username
              <button onClick={() => handleSoritng("username")}>
                {positionUsername === "down" ? "🔻" : "🔼"}
              </button>
              {/* <Input inputField="username" /> */}
              <Input
                inputField="username"
                previousField={previousField}
                setPreviousField={setPreviousField}
              />
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              e-mail
              <button onClick={() => handleSoritng("email")}>
                {positionEmail === "down" ? "🔻" : "🔼"}
              </button>
              {/* <Input inputField="email" /> */}
              <Input
                inputField="email"
                previousField={previousField}
                setPreviousField={setPreviousField}
              />
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              phone
              <button onClick={() => handleSoritng("phone")}>
                {positionPhone === "down" ? "🔻" : "🔼"}
              </button>
              {/* <Input inputField="phone" /> */}
              <Input
                inputField="phone"
                previousField={previousField}
                setPreviousField={setPreviousField}
              />
            </th>
          </tr>
        </thead>

        {!isLoading ? (
          <tbody>
            {usersList.length > 0 ? (
              usersList.map((user: IUser) => (
                <tr key={user.id}>
                  <td style={{ outline: "2px solid white", padding: "8px" }}>
                    {user.name}
                  </td>
                  <td style={{ outline: "2px solid white", padding: "8px" }}>
                    {user.username}
                  </td>
                  <td style={{ outline: "2px solid white", padding: "8px" }}>
                    {user.email}
                  </td>
                  <td style={{ outline: "2px solid white", padding: "8px" }}>
                    {user.phone}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    textAlign: "center",
                  }}
                >
                  No data
                </td>
              </tr>
            )}
          </tbody>
        ) : (
          <tbody>
            <tr style={{ width: "100%" }}>
              <td style={{ padding: "8px", textAlign: "center" }}>
                Loading...
              </td>
            </tr>
          </tbody>
        )}
      </table>

      <button
        onClick={() => {
          setUsersList(users);
          setpositionPhone("down");
          setpositionName("down");
          setpositionUsername("down");
          setpositionEmail("down");
        }}
      >
        Reset
      </button>
    </div>
  );
};
export default Table;
