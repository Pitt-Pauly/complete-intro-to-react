// @flow

import * as React from 'react';
import preload from '../data.json';
import ShowCard from './ShowCard';

type State = {
  searchTerm: string
};

class Search extends React.Component<void, State> {
  state = {
    searchTerm: ''
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  render() {
    return (
      <div className="search">
        <header>
          <h1>h4p1 video</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(this.state.searchTerm.toUpperCase()) >= 0
            )
            .map(show => <ShowCard {...show} key={show.imdbID} />)}
        </div>
      </div>
    );
  }
}

export default Search;
