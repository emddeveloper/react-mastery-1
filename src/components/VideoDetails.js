import React from "react"

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>
  }
  return (
    <div>
      <div className="ui segment ">
        <div className="ui header">{video.snippet.title}</div>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetails
