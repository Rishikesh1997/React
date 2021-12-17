import { Route, Routes } from "react-router";
import Cart from "./Cart";
import FooterComp from "./FooterComp";
import LogIn from "./LogIn";
import NavBar from "./NavBar";
import RegisterUser from "./RegisterUser";
import UserList from "./UserList";

export default () => {
  return (
    <div>
      <header>
        <h1 style={styles.header}>OnlineShopping Project</h1>
        <NavBar />
        <Routes>
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"/login"} element={<LogIn />} />
          <Route path={"/register"} element={<RegisterUser />} />
          <Route path={"/userList"} element={<UserList />} />
        </Routes>
      </header>

      <body style={styles.body}></body>
      <footer style={styles.footer}>
        <FooterComp />
      </footer>
    </div>
  );
};

const styles = {
  block: {
    backgroundColor: "#557a95",
  },
  header: {
    backgroundColor: "#20c997",
  },
  body: {
    backgroundColor: "#db94cc",
  },
  footer: {
    backgroundColor: " #878f99",
  },
};
