interface Prop {
  children: React.ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <header>
        <h2>Kaliuzhnyi Nazarii</h2>
        <h3>Users List</h3>
      </header>
      <div>{children}</div>
      <footer>
        {" "}
        <h2>Kaliuzhnyi Nazarii</h2>
      </footer>
    </>
  );
};

export default Layout;
