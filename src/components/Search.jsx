import React from "react";
import { useGolbalContext } from "../context/context";

const Search = () => {
  const { setMovieName, movieName, isError } = useGolbalContext();

  return (
    <div id="search-header">
      <h1>Search Your Favourite Movies</h1>
      <div className="search-container">
        <h3 className="search-text">Search :   </h3>

        <form
          action="#"
          onSubmit={(e) => e.preventDefault()}
          className="input-button"
        >
          <input
          className="search-input"
            type="text"
            placeholder="Search movies"
            value={movieName}
            onChange={(e) => setMovieName(e.target.value)}
          />
        </form>
      </div>
      <p>{isError.show && isError.msg}</p>
    </div>
  );
};

export default Search;
