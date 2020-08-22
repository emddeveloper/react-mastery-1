import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube"
import VideoList from "../components/VideoList"
import VideoDetails from "./VideoDetails"

class App extends React.Component {
  state = { videos: [], selectedVideo: null }

  componentDidMount() {
    this.ontermSubmit("Cars")
  }
  ontermSubmit = async term => {
    const respnse = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    this.setState({
      videos: respnse.data.items,
      selectedVideo: respnse.data.items[0]
    })
  }
  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.ontermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
