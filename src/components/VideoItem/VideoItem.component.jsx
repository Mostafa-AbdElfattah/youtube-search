import "./video-item.styles.css";
import React from "react";

export const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="item video-item " >
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div className="content">
        <div className="header header-div">{video.snippet.title}</div>
      </div>
    </div>
  );
};
