import React, { Component } from 'react';

class Crawler extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      search: '',
    };
  }
  render() {
    return (
      <div class="Crawler-search">
        <span>
          Craigslist
          <div class="Crawler-search-box">
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={evt => this.updateInputValue(evt)}
              class="Crawler-search-text"
            />
            <button class="Crawler-search-submit" onClick={() => this.search()}>
              Crawl
            </button>
          </div>
        </span>
        <div class="Crawler-results">
          <li>{this.state.results}</li>
        </div>
      </div>
    );
  }
  search() {
    this.setState({
      results: [...this.state.results, this.state.search],
    });
  }
  updateInputValue(evt) {
    console.log(evt.target.value);
    this.setState({
      search: evt.target.value,
    });
  }
}
export default Crawler;
