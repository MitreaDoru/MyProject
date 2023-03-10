import { NavLink } from "react-router-dom";
import styled from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styled.active} to="/sign-in">
              Sign in
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styled.active} to="/log-in">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
