import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import "./searchResult.scss";
import { Banner, Card } from "../";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchMusic } from "../../features/music/musicSlice";
const SearchResult = () => {
  const [q] = useSearchParams();
  const query = q.get("q");
  console.log(query);

  const dispatch = useDispatch();
  const musicState = useSelector((state) => state.music);
  const { searchRes } = musicState;
  useEffect(() => {
    dispatch(asyncSearchMusic(query));
  }, [dispatch, query]);
  return (
    <div className="search-result">
      <Banner />
      <div className="result-wrapper">
        <Card searchRes={searchRes} />
      </div>
    </div>
  );
};

export default SearchResult;
