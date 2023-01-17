import { NavLink } from "react-router-dom";
import styled from "./SignInLogInHeader.module.css";

const SignInLogInHeader = () => {
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

export default SignInLogInHeader;
