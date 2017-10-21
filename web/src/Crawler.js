import React, { Component } from "react";

class Crawler extends Component {
  render() {
    return (
      <div class="Crawler-search">
        Craigslist
        <div class="Crawler-search-box">
          <form>
            <textarea class="Crawler-search-text">Search</textarea>
            <button class="Crawler-search-submit">Crawl</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Crawler;
