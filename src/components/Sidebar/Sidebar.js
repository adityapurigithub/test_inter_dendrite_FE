import React, { useState } from "react";
import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import { options } from "../../apis/musicAPI";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestion] = useState([]);

  const navigate = useNavigate();

  const openSearch = () => {
    setQuery("");
    setShowSearch(!showSearch);
    setSuggestion([]);
  };

  const handleChange = async (e) => {
    setQuery(e.target.value);

    if (e.target.value === "") {
      setSuggestion([]);
    }

    const res = await fetch(
      `https://shazam.p.rapidapi.com/auto-complete?term=${e.target.value}`,
      options
    );
    const data = await res.json();
    setSuggestion(data.hints);
    console.log(suggestions);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/searchResults?q=${query}`);
    setQuery("");
  };
  const handleSuggClick = (term) => {
    setQuery(term);
    setSuggestion([]);
  };
  return (
    <div className="sidebar">
      <div className="logo">
        <img src="" />
        <h2>Muzix</h2>
      </div>
      <div className={showSearch ? "search search-show" : "search search-hide"}>
        <form className="form" onSubmit={handleSearch}>
          <input
            type="text"
            value={query}
            onChange={handleChange}
            // onBlur={() =>
            //   setTimeout(() => {
            //     setSuggestion([]);
            //   }, 300)
            // }
          />
          {suggestions.length !== 0 && (
            <div className="suggestion">
              {suggestions.map((sugg) => (
                <div
                  className="sugg-term"
                  onClick={() => handleSuggClick(sugg.term)}
                >
                  {sugg.term}
                </div>
              ))}
            </div>
          )}
          <button
            type="submit"
            style={{
              backgroundColor: "transparent",
              border: "0",
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/128/954/954591.png"
              height="20px"
            />
          </button>
        </form>
        <span onClick={openSearch}>
          <h3>X</h3>
        </span>
      </div>
      <div className={`btn ${suggestions.length !== 0 && "btn-lower"}`}>
        <Link to="/home">
          <div>Home</div>
        </Link>
        <div onClick={openSearch}>Search</div>
        <Link to="/playlist">
          <div>Playlist</div>
        </Link>
        <Link to="/favourite">
          <div>Favourite</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
