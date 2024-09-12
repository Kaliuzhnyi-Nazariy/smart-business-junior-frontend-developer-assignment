import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchUsers } from "./api/users/usersOperations";
import { useSelector } from "react-redux";
import {
  usersFilteredEmail,
  // usersFiltered,
  // filteredUsersByName,
  // selectFilter,
  selectUsers,
  usersFilteredName,
  usersFilteredUsername,
  usersFilteredPhone,
} from "./api/users/usersSelector";
import { IUser } from "./TypesAndInterfaces/typesOrInterfaces";
import {
  updateFilterEmail,
  updateFilterName,
  updateFilterPhone,
  updateFilterUsername,
} from "./api/users/filterSlice";

function App() {
  const dispatch = useAppDispatch();
  const [usersList, setUsersList] = useState([] as IUser[]);
  const [positionName, setpositionName] = useState("down");
  const [positionUsername, setpositionUsername] = useState("down");
  const [positionEmail, setpositionEmail] = useState("down");
  const [positionPhone, setpositionPhone] = useState("down");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const users = useSelector(selectUsers);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  // const filter = useSelector(selectFilter);
  // useEffect(() => {
  //   console.log(filter?.filter);
  // }, [filter]);

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

  // const justChecking = useSelector(usersFilteredName);
  // // const justChecking = useSelector(usersFilteredEmail);
  // // const justChecking = useSelector(usersFilteredUsername);
  // // const justChecking = useSelector(usersFilteredPhone);
  // useEffect(() => {
  //   console.log(justChecking);
  // }, [justChecking]);

  const handleSortName = () => {
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
  };

  const handleSortUsername = () => {
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
  };

  const handleSortEmail = () => {
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
  };

  const handleSortPhone = () => {
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
  };

  return (
    <div className="">
      <input
        type="text"
        name=""
        id=""
        placeholder="name"
        onChange={(e) => {
          dispatch(updateFilterName(e.target.value));
          // checkTheory("name", e.target.value);
        }}
        // onFocus={() => chooseFilteredList("name")}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="email"
        onChange={(e) => {
          dispatch(updateFilterEmail(e.target.value));
          // checkTheory("email", e.target.value);
        }}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="username"
        onChange={(e) => {
          dispatch(updateFilterUsername(e.target.value));
          // checkTheory("email", e.target.value);
        }}
        // onFocus={checkTheory("email", "le")}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="phone"
        onChange={(e) => {
          dispatch(updateFilterPhone(e.target.value));
          // checkTheory("email", e.target.value);
        }}
        // onFocus={checkTheory("email", "le")}
      />
      <table>
        <thead>
          <tr>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              name
              <button onClick={handleSortName}>
                {positionName === "down" ? "🔻" : "🔼"}
              </button>
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              username
              <button onClick={handleSortUsername}>
                {positionUsername === "down" ? "🔻" : "🔼"}
              </button>
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              e-mail
              <button onClick={handleSortEmail}>
                {positionEmail === "down" ? "🔻" : "🔼"}
              </button>
            </th>
            <th style={{ outline: "2px solid white", padding: "8px" }}>
              phone
              <button onClick={handleSortPhone}>
                {positionPhone === "down" ? "🔻" : "🔼"}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {/* {usersList?.length < 0 */}
          {
            usersList?.length > 0
              ? usersList.map((user: IUser) => {
                  return (
                    <tr key={user.id}>
                      <td
                        style={{ outline: "2px solid white", padding: "8px" }}
                      >
                        {user.name}
                      </td>
                      <td
                        style={{ outline: "2px solid white", padding: "8px" }}
                      >
                        {user.username}
                      </td>
                      <td
                        style={{ outline: "2px solid white", padding: "8px" }}
                      >
                        {user.email}
                      </td>
                      <td
                        style={{ outline: "2px solid white", padding: "8px" }}
                      >
                        {user.phone}
                      </td>
                    </tr>
                  );
                })
              : ""
            // Check.map((user: IUser) => {
            //       return (
            //         <tr key={user.id}>
            //           <td style={{ outline: "2px solid white", padding: "8px" }}>
            //             {user.name}
            //           </td>usersList
            //           <td style={{ outline: "2px solid white", padding: "8px" }}>
            //             {user.username}
            //           </td>
            //           <td style={{ outline: "2px solid white", padding: "8px" }}>
            //             {user.email}
            //           </td>
            //           <td style={{ outline: "2px solid white", padding: "8px" }}>
            //             {user.phone}
            //           </td>
            //         </tr>
            //       );
            //     })
          }
        </tbody>
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
}

export default App;

// const userListFiltered = useSelector(usersFiltered);
// // const checkEmail = useSelector(filteredUsersByEmail);
// // console.log(filter);

// // const checkTheory = (type: string, value: string) => {
// //   console.log(value);
// //   switch (type) {
// //     case "name":
// //       // dispatch(updateFilterName(value));
// // setUsersListCheck(checkName);
// //       break;
// //     case "email":
// //       // dispatch(updateFilterName(value));
// //       // setUsersListCheck(checkEmail);
// //       break;
// //     default:
// //       // setUsersListCheck(users);
// //   }
// // };

// // useEffect(() => {
// //   setUsersListCheck(usersListCheck);
// // }, [
// //   dispatch,
// //   usersListCheck,
// //   // checkName,
// //   checkEmail,
// // ]);

// // useEffect(() => {
// //   setUsersListCheck(users);
// // }, [users]);

// // console.log("usersListCheck: ", usersListCheck);

// useEffect(() => {
//   console.log("userListFiltered: ", userListFiltered);
// }, [userListFiltered]);

// console.log(usersList);

// useEffect(() => {
//   dispatch(fetchUsers());
// }, [dispatch]);
