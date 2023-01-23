import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import { increment } from "./features/music/musicSlice";
import {
  Home,
  Playlist,
  List,
  Sidebar,
  Detail,
  SearchResult,
  Err404,
} from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details/:id" element={<Detail />} />
          <Route path="/searchResults" element={<SearchResult />} />
          {["playlist", "favourite"].map((path) => (
            <Route path={path} element={<List />} />
          ))}
          <Route path="*" element={<Err404 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
