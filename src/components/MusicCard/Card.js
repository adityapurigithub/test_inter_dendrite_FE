import React from "react";
import { Link } from "react-router-dom";
import "./card.scss";
const Card = ({ hits, trending, latest, retro, searchRes }) => {
  return (
    <div className="card-wrapper">
      {searchRes ? (
        <div className="section">
          <div className="list">
            <h3>All Time Hits</h3>
            <div className="card">
              {searchRes.tracks.hits.map(({ track }) => (
                <div className="card-content">
                  <Link to={`/details/${track.key}`}>
                    <img
                      className="card-poster"
                      src={track.images.background}
                      alt="track-bg"
                    />
                    <div className="card-details">
                      <div>{track.share.subject}</div>
                      <div>{track.hub.displayname}</div>
                      {track.hub.explicit && <div>Explicit</div>}
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="section">
            <div className="list">
              <h3>All Time Hits</h3>
              <div className="card">
                {hits.tracks.hits.map(({ track }) => (
                  <div className="card-content">
                    <Link to={`/details/${track.key}`}>
                      <img
                        className="card-poster"
                        src={track.images.background}
                        alt="track-bg"
                      />
                      <div className="card-details">
                        <div>{track.share.subject}</div>
                        <div>{track.hub.displayname}</div>
                        {track.hub.explicit && <div>Explicit</div>}
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="list">
              <h3>Latest Released</h3>
              <div className="card">
                {latest.tracks.hits.map(({ track }) => (
                  <div className="card-content">
                    <img
                      className="card-poster"
                      src={track.images.background}
                      alt="track-bg"
                    />
                    <div className="card-details">
                      <div>{track.share.subject}</div>
                      <div>{track.hub.displayname}</div>
                      {track.hub.explicit && <div>Explicit</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="list">
              <h3>Trending Released</h3>
              <div className="card">
                {trending.tracks.hits.map(({ track }) => (
                  <div className="card-content">
                    <img
                      className="card-poster"
                      src={track.images.background}
                      alt="track-bg"
                    />
                    <div className="card-details">
                      <div>{track.share.subject}</div>
                      <div>{track.hub.displayname}</div>
                      {track.hub.explicit && <div>Explicit</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="section">
            <div className="list">
              <h3>Retro Songs</h3>
              <div className="card">
                {retro.tracks.hits.map(({ track }) => (
                  <div className="card-content">
                    <img
                      className="card-poster"
                      src={track.images.background}
                      alt="track-bg"
                    />
                    <div className="card-details">
                      <div>{track.share.subject}</div>
                      <div>{track.hub.displayname}</div>
                      {track.hub.explicit && <div>Explicit</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Card;
