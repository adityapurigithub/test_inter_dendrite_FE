import React, { useState } from "react";
import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const openSearch = () => {
    setQuery("");
    setShowSearch(!showSearch);
  };
  const handleSearch = (e) => {
    e.preventDefault();

    navigate(`/searchResults?q=${query}`);
    setQuery("");
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
            onChange={(e) => setQuery(e.target.value)}
          />
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
      <div className="btn">
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
