import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube"
import VideoList from "../components/VideoList"
import VideoDetails from "./VideoDetails"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }
  ontermSubmit = async term => {
    const respnse = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    this.setState({ videos: respnse.data.items })
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.ontermSubmit} />
        <VideoDetails video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
      </div>
    )
  }
}

export default App
