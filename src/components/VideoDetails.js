import React from "react"

const VideoDetails = ({ video }) => {
  if (!video) {
    return <div>Loading..</div>
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <div>
      <div className="ui segment ">
        <div className="ui embed">
          <iframe src={videoSrc} title="youtue video player"></iframe>
        </div>
        <div className="ui header">{video.snippet.title}</div>
        <p className="">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetails
