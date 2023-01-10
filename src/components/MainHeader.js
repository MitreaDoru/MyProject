import { NavLink } from "react-router-dom";
import styled from "./MainHeader.module.css";

const MainHeader = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styled.active} to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styled.active} to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
