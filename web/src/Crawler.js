import React, { Component } from 'react';
import Results from './Results';
import { getCrawlResults } from './api';

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
      <div className="Crawler-search">
        <span>
          Craigslist
          <div className="Crawler-search-box">
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={evt => this.updateInputValue(evt)}
              className="Crawler-search-text"
            />
            <button
              className="Crawler-search-submit"
              onClick={() => this.search()}
            >
              Crawl
            </button>
          </div>
        </span>
        <div className="Crawler-results">
          {results.length > 0 &&
            results.map((r, v) => <Results value={r} key={v} />)}
        </div>
      </div>
    );
  }
  async search() {
    try {
      const resultsFromApi = await getCrawlResults(
        this.state.search,
        'craigslist'
      );
      console.log('Search');
      console.log(resultsFromApi);
      this.setState({
        results: [
          ...this.state.results,
          resultsFromApi.search,
          resultsFromApi.site,
        ],
      });
    } catch (error) {
      console.log(error);
    }
  }
  updateInputValue(evt) {
    this.setState({
      search: evt.target.value,
    });
  }
}
export default Crawler;
