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
import Input from "./Input";
import { TbTriangleInvertedFilled, TbTriangleFilled } from "react-icons/tb";
import styles from "./table.module.css";

const Table = () => {
  const dispatch = useAppDispatch();
  const [usersList, setUsersList] = useState([] as IUser[]);
  const [positionName, setpositionName] = useState("down");
  const [positionUsername, setpositionUsername] = useState("down");
  const [positionEmail, setpositionEmail] = useState("down");
  const [positionPhone, setpositionPhone] = useState("down");
  const [previousField, setPreviousField] = useState<string>("");

  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (previousField === "" && usersList.length < users.length) {
      setUsersList(users);
      setpositionName("down");
      setpositionUsername("down");
      setpositionEmail("down");
      setpositionPhone("down");
    }
  }, [previousField, users, usersList]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

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

  return (
    <div className={styles.tablePlace}>
      <table>
        <thead>
          <tr>
            <th className={styles.tableHead}>
              <div className={styles.headContainer}>
                <h4 style={{ fontWeight: "8px" }}>Name</h4>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleSoritng("name")}
                    className={styles.button}
                  >
                    {positionName === "down" ? (
                      <TbTriangleInvertedFilled />
                    ) : (
                      <TbTriangleFilled />
                    )}
                  </button>
                  <Input
                    inputField="name"
                    previousField={previousField}
                    setPreviousField={setPreviousField}
                  />
                </div>
              </div>
            </th>
            <th className={styles.tableHead}>
              <div className={styles.headContainer}>
                <h4 style={{ fontWeight: "8px" }}>Username</h4>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleSoritng("username")}
                    className={styles.button}
                  >
                    {positionUsername === "down" ? (
                      <TbTriangleInvertedFilled />
                    ) : (
                      <TbTriangleFilled />
                    )}
                  </button>
                  <Input
                    inputField="username"
                    previousField={previousField}
                    setPreviousField={setPreviousField}
                  />
                </div>
              </div>
            </th>
            <th className={styles.tableHead}>
              <div className={styles.headContainer}>
                <h4 style={{ fontWeight: "8px" }}>E-mail</h4>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleSoritng("email")}
                    className={styles.button}
                  >
                    {positionEmail === "down" ? (
                      <TbTriangleInvertedFilled />
                    ) : (
                      <TbTriangleFilled />
                    )}
                  </button>
                  <Input
                    inputField="email"
                    previousField={previousField}
                    setPreviousField={setPreviousField}
                  />
                </div>
              </div>
            </th>
            <th className={styles.tableHead}>
              <div className={styles.headContainer}>
                <h4>Phone</h4>
                <div className={styles.buttonContainer}>
                  <button
                    onClick={() => handleSoritng("phone")}
                    className={styles.button}
                  >
                    {positionPhone === "down" ? (
                      <TbTriangleInvertedFilled />
                    ) : (
                      <TbTriangleFilled />
                    )}
                  </button>
                  <Input
                    inputField="phone"
                    previousField={previousField}
                    setPreviousField={setPreviousField}
                  />
                </div>
              </div>
            </th>
          </tr>
        </thead>

        {!isLoading ? (
          <tbody>
            {usersList.length > 0 ? (
              usersList.map((user: IUser) => (
                <tr key={user.id} style={{ height: "50px" }}>
                  <td
                    style={{
                      outline: "2px solid white",
                    }}
                    className={styles.bodyTableStyles}
                  >
                    <p className={styles.textInTd}>{user.name}</p>
                  </td>
                  <td
                    style={{
                      outline: "2px solid white",
                    }}
                    className={styles.bodyTableStyles}
                  >
                    <p className={styles.textInTd}>{user.username}</p>
                  </td>
                  <td
                    style={{
                      outline: "2px solid white",
                    }}
                    className={styles.bodyTableStyles}
                  >
                    <p className={styles.textInTd}>{user.email}</p>
                  </td>
                  <td
                    style={{
                      outline: "2px solid white",
                    }}
                    className={styles.bodyTableStyles}
                  >
                    <p className={styles.textInTd}>{user.phone}</p>
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
      {/* <button
        onClick={() => {
          setUsersList(users);
          setpositionPhone("down");
          setpositionName("down");
          setpositionUsername("down");
          setpositionEmail("down");
        }}
      >
        Reset
      </button> */}
    </div>
  );
};
export default Table;
