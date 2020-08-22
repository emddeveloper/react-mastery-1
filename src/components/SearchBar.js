import React from "react"

class SearchBar extends React.Component {
  state = { term: "" }
  onInutChange = e => {
    this.setState({ term: e.target.value })
  }
  onFormSubmit = e => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.term)
  }
  render() {
    return (
      <div className="ui segment search-bar">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Video Search</label>
            <input type="text" id="search" value={this.state.term} onChange={this.onInutChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar
