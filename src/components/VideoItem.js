import React from "react"
import VideoList from "./VideoList"

const VideoItem = ({ video }) => {
  return (
    <div>
      <img src={video.snippet.thumbnails.medium.url} />
      <div>{video.snippet.title}</div>
    </div>
  )
}

export default VideoItem
