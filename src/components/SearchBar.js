import styled from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styled.container}>
      <form method="get" className={styled.searchBar}>
        <input type="text" placeholder="search movies" />
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default SearchBar;
