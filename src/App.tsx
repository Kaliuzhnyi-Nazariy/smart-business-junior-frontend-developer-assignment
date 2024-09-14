import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./components/Layout";
import Table from "./components/table";
import { selectIsError } from "./api/users/usersSelector";
import { fetchUsers } from "./api/users/usersOperations";
import { useAppDispatch } from "./hooks/useAppDispatch";

function App() {
  const error = useSelector(selectIsError);
  const dispatch = useAppDispatch();

  return (
    <Layout>
      {error ? (
        <>
          <h2>Oooops...</h2>
          <p>Something went wrong!</p>
          <p>Please try again!</p>
          <button type="button" onClick={() => dispatch(fetchUsers())}>
            Try
          </button>
        </>
      ) : (
        <>
          <div className="introText">
            <h1>Users table</h1>
            <p>Here is the list of users!</p>
            <p>
              You can sort users and filtering them! <b>Let's do it!</b>
            </p>
          </div>
          <Table />
        </>
      )}
    </Layout>
  );
}

export default App;
