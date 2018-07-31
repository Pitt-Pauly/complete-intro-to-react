// @flow

import React, { Component } from 'react';
import ShowCard from './ShowCard';
import Header from './Header';

type State = {
  searchTerm: string
};

type Props = {
  shows: Array<Show>
};

class Search extends Component<Props, State> {
  state = {
    searchTerm: ''
  };

  props: {
    shows: Array<Show>
  };

  handleSearchTermChange = (
    event: SyntheticKeyboardEvent<HTMLInputElement>
  ) => {
    this.setState({ searchTerm: event.currentTarget.value });
  };

  render() {
    return (
      <div className="search">
        <Header
          searchTerm={this.state.searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
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
