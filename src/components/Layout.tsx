import styles from "./layout.module.css";

interface Prop {
  children: React.ReactNode;
}

const Layout = ({ children }: Prop) => {
  return (
    <>
      <header className={styles.headerContainer}>
        <h2>
          <a href="https://kaliuzhnyi-nazariy.github.io/my-portfolio/">
            Kaliuzhnyi Nazarii
          </a>
        </h2>
        <h3>Users List</h3>
      </header>
      <div>{children}</div>
      <footer className={styles.footer}>
        <h2>Users List</h2>
        <p>
          &copy;{" "}
          <a href="https://kaliuzhnyi-nazariy.github.io/my-portfolio/">
            Kaliuzhnyi Nazarii
          </a>
          , 2024
        </p>
      </footer>
    </>
  );
};

export default Layout;
