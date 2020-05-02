import "./video-list.styles.css";
import React from "react";
import { VideoItem } from "../VideoItem/VideoItem.component";

export const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem 
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return (
    <div className="video-list ui relaxed divided list"> {renderedList} </div>
  );
};
