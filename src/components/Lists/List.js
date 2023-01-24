import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Banner } from "../";
import {
  removeFromFavourite,
  removeFromPlayList,
} from "../../features/music/musicSlice";
import "./list.scss";

const List = () => {
  const musicListState = useSelector((state) => state.musicList);
  let { favourite, playlist } = musicListState;

  const location = useLocation();

  const path = location.pathname;

  const dispatch = useDispatch();
  const handleRemoveFromList = (e) => {
    if (e.target.name === "favourite") {
      dispatch(removeFromFavourite(e.target.id));
    } else {
      dispatch(removeFromPlayList(e.target.id));
    }
  };

  switch (path) {
    case "/favourite":
      return (
        <div className="list-wrapper">
          <Banner />
          <div className="list-card">
            <div className="list-bg" />
            <div className="list-details">
              <h2>Your Favourites</h2>
              <div className="list-card">
                <div className="list-card">
                  {favourite.length === 0 && <h2>You have No Favourites...</h2>}
                  {favourite.map((fav, id) => (
                    <div className="fav">
                      <img src={`${fav.images.background}`} />
                      <div className="fav-info">
                        <div className="text">
                          <div>
                            <span>Song</span>: {fav.title}
                          </div>
                          <div>
                            <span>Artist</span>: {fav.subtitle}
                          </div>
                          <div>
                            <span>Genere</span>: {fav.type}
                          </div>
                        </div>
                        <div className="fav-btn">
                          <button
                            id={id}
                            name="favourite"
                            onClick={handleRemoveFromList}
                          >
                            Remove from Favourite
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    case "/playlist":
      return (
        <div className="list-wrapper">
          <Banner />
          <div className="list-card">
            <div
              className="list-bg"
              style={{
                backgroundImage: `url("https://t3.ftcdn.net/jpg/01/00/89/48/360_F_100894820_BGOQxY9o8ah8y4zgui2hprGy9NdZujlv.jpg")`,
              }}
            />
            <div className="list-details">
              <h2>Your Playlist</h2>
              <div className="list-card">
                <div className="list-card">
                  {playlist.length === 0 && (
                    <>
                      <h2>Nothing to Show In your Playlist...</h2>
                      <Link to="/home">Add some Music in your list</Link>
                    </>
                  )}

                  {playlist.map((playlist, id) => (
                    <div className="fav">
                      <img src={`${playlist.images.background}`} />
                      <div className="fav-info">
                        <div className="text">
                          <div>
                            <span>Song</span>: {playlist.title}
                          </div>
                          <div>
                            <span>Artist</span>: {playlist.subtitle}
                          </div>
                          <div>
                            <span>Genere</span>: {playlist.type}
                          </div>
                        </div>
                        <div className="fav-btn">
                          <button
                            id={id}
                            name="playlist"
                            onClick={handleRemoveFromList}
                          >
                            Remove from Playlist
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    default:
      return "Err";
  }
};

export default List;
