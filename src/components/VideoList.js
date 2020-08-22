import React from "react"
import VideoItem from "./VideoItem"

const VideoList = ({ videos, onVideoSelect }) => {
  const renderdList = videos.map(video => {
    return <VideoItem video={video} onVideoSelect={onVideoSelect} />
  })

  return <div className="ui relaxed divided list">{renderdList}</div>
}

export default VideoList
