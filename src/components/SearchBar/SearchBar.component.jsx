import "./search-bar.styles.css";
import React from "react";

export class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event=>{
    event.preventDefault();

    this.setState({term: event.target.value});

  }

  onFormsSubmit = event=>{
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);

  }
  

  render() {
    return (
      <div className="search-bar ui segment search-div">
        <form onSubmit={this.onFormsSubmit} className="ui form">
          <div className="field">
            <input
              className="search-bar-style"
              placeholder="Search"
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}
