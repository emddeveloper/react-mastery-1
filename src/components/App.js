import React from "react"
import SearchBar from "./SearchBar"
import youtube from "../api/youtube"
import VideoList from "../components/VideoList"

class App extends React.Component {
  state = { videos: [] }
  ontermSubmit = async term => {
    const respnse = await youtube.get("/search", {
      params: {
        q: term
      }
    })
    this.setState({ videos: respnse.data.items })
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.ontermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

export default App
