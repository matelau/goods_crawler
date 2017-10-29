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
    const results = this.state.results;
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
        // Loop over results and create a new li elements per result // //
        <div class="Crawler-results">
          {results.length > 0 && results.map(r => <li> {r} </li>)}
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
    this.setState({
      search: evt.target.value,
    });
  }
}
export default Crawler;
