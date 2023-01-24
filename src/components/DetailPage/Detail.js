import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  asyncFetchSongDetails,
  addMusicToPlaylist,
  addMusicToFavourite,
} from "../../features/music/musicSlice";
import "./details.scss";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const musicState = useSelector((state) => state.music);

  const musicListState = useSelector((state) => state.musicList);

  const { details } = musicState;
  const { favourite, playlist } = musicListState;

  useEffect(() => {
    dispatch(asyncFetchSongDetails(id));
    // dispatch(asyncFetchSongDetails(id)); fetch related...
  }, [dispatch, id]);

  console.log(details);
  const handleAddToList = (e) => {
    if (e.target.id === "playlist") {
      dispatch(addMusicToPlaylist(details));
      // console.log(musicListState);
    } else {
      dispatch(addMusicToFavourite(details));
    }
  };

  if (Object.keys(details).length === 0) {
    return "Loading";
  }
  const alreadyInPlaylist = playlist.find((i) => i.key === id);
  const alreadyInFav = favourite.find((i) => i.key === id);

  return (
    <div className="details-wrapper">
      <div className="details-bg" />
      <div className="song-details">
        <img className="img" src={`${details.images.background}`} />
        <div className="info">
          <div className="text">
            <div>
              <span>Song</span>: {details.title}
            </div>
            <div>
              <span>Artist</span>: {details.subtitle}
            </div>
            <div>
              <span>Genere</span>: {details.type}
            </div>
          </div>
          <div className="btn">
            <button
              id="playlist"
              onClick={handleAddToList}
              disabled={alreadyInPlaylist}
            >
              {alreadyInPlaylist
                ? `
              In Playlist
              `
                : `
              Add to playlist
              `}
            </button>

            <button
              id="favourite"
              onClick={handleAddToList}
              disabled={alreadyInFav}
            >
              {alreadyInFav
                ? `
              Your Favourite
              `
                : `
             Add to Favourites
              `}
            </button>
          </div>
        </div>
      </div>
      <div className="artist-details"></div>
    </div>
  );
};

export default Detail;
