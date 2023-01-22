import React, { useEffect, useState } from "react";
import "./home.scss";
import { Sidebar, Card, Banner } from "../";
import { useDispatch, useSelector } from "react-redux";
import {
  asyncfetchHitMusic,
  asyncfetchLatestMusic,
  asyncfetchRetroMusic,
  asyncfetchTrendingMusic,
} from "../../features/music/musicSlice";

const Home = () => {
  const music = ["all time hits", "trending", "latest", "retro"];
  const dispatch = useDispatch();
  const musicState = useSelector((state) => state.music);

  useEffect(() => {
    dispatch(asyncfetchHitMusic(music[0]));
    dispatch(asyncfetchTrendingMusic(music[1]));
    dispatch(asyncfetchLatestMusic(music[2]));
    dispatch(asyncfetchRetroMusic(music[3]));
  }, [dispatch]);

  console.log(musicState);
  const { hits, latest, trending, retro } = musicState;
  if (
    Object.keys(hits).length === 0 ||
    Object.keys(trending).length === 0 ||
    Object.keys(latest).length === 0 ||
    Object.keys(retro).length === 0
  ) {
    return "Loading";
  }
  return (
    <div className="home">
      <div className="main">
        <Banner />
        <Card hits={hits} latest={latest} trending={trending} retro={retro} />
      </div>
    </div>
  );
};

export default Home;
