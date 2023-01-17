import { NavLink } from "react-router-dom";
import styled from "./MainHeader.module.css";
import SearchBar from "./SearchBar";

const ProductsHeader = () => {
  return (
    <header className={styled.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={styled.active} to="/log-in">
              Logout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default ProductsHeader;
