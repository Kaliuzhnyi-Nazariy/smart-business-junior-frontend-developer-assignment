import { useEffect, useState } from "react";
import "./App.css";
import { useAppDispatch } from "./hooks/useAppDispatch";
import { fetchUsers } from "./api/users/usersOperations";
import { useSelector } from "react-redux";
import { selectUsers } from "./api/users/usersSelector";
import { IUser } from "./TypesAndInterfaces/typesOrInterfaces";

function App() {
  const dispatch = useAppDispatch();
  const [usersList, setUsersList] = useState([] as IUser[]);
  const [positionName, setpositionName] = useState("down");
  const [positionUsername, setpositionUsername] = useState("down");
  const [positionEmail, setpositionEmail] = useState("down");
  const [positionPhone, setpositionPhone] = useState("down");

  const users = useSelector(selectUsers);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleSortName = () => {
    setpositionUsername("down");
    setpositionEmail("down");
    setpositionPhone("down");

    if (positionName === "down") {
      const sortedUsersByName = [...users].sort((a, b) =>
        b.name.localeCompare(a.name)
      );
      setUsersList(sortedUsersByName);
      setpositionName("up");
    } else {
      const sortedUsersByName = [...users].sort((a, b) =>
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
      const sortedUsersByUsername = [...users].sort((a, b) =>
        b.username.localeCompare(a.username)
      );
      setUsersList(sortedUsersByUsername);
      setpositionUsername("up");
    } else {
      const sortedUsersByUsername = [...users].sort((a, b) =>
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
      const sortedUsersByEmail = [...users].sort((a, b) =>
        b.email.localeCompare(a.email)
      );
      setUsersList(sortedUsersByEmail);
      setpositionEmail("up");
    } else {
      const sortedUsersByEmail = [...users].sort((a, b) =>
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
      const sortedUsersByPhone = [...users].sort((a, b) => {
        const phoneA = a.phone.replace(/\D/g, "");
        const phoneB = b.phone.replace(/\D/g, "");
        return phoneB.localeCompare(phoneA);
      });
      setUsersList(sortedUsersByPhone);
      setpositionPhone("up");
    } else {
      const sortedUsersByPhone = [...users].sort((a, b) => {
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
          {usersList.length > 0 ? (
            usersList.map((user: IUser) => {
              return (
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
              );
            })
          ) : (
            <tr>
              <td>Loading ...</td>
            </tr>
          )}
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
