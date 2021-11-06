import React from "react";

function SearchMovies() {
  const searchMovies = async (e) => {
    e.preventDefault();
    console.log("submitting");
  };

  const url = `https://api.themoviedb.org/3/search/movie?api_key=27cee139bbd7e91d4cb9aac1371b17c5&language=en-US&query=${query}&page=1&include_adult=false`;

  return (
    <form className="form">
      <label className="label" htmlFor="query">
        Movie Name
      </label>
      <input
        type="text"
        className="input"
        name="query"
        placeholder="i.e. The Birdcage"
      />
      <button className="button" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchMovies;
