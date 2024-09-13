import "./App.css";
import Layout from "./components/Layout";
import Table from "./components/table";

function App() {
  return (
    <Layout>
      <h1>Users table</h1>
      <p>Here is the list of users!</p>
      <p>You can sort users and filtering them! Let's do it!</p>
      <Table />
    </Layout>
  );
}

export default App;
