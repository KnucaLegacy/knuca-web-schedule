import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import SearchListItem from './SearchListItem';
import ErrorListItem from './ErrorListItem';
import Spinner from './Spinner';

export default class SearchList extends PureComponent {
  static propTypes = {
    searchItemsState: PropTypes.shape({
      searchItems: PropTypes.shape({
        items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
      }),
      isLoading: PropTypes.bool,
      isErrored: PropTypes.bool,
      searchQuery: PropTypes.string,
    }),
    fetchSearchItems: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.searchItemsState.searchItems.items.length === 0) {
      this.props.fetchSearchItems();
    }
  }

  renderSearchItems = () => {
    const { searchItems, searchQuery } = this.props.searchItemsState;

    if (searchQuery.length >= 1) {
      const filteredItems = searchItems.items
        .filter(item => item.name.toLowerCase().includes(searchQuery));

      return (
        filteredItems.map(item =>
          <SearchListItem item={item} key={item.name} />,
        )
      );
    }
    return null;
  }


  render() {
    const { isLoading, isErrored } = this.props.searchItemsState;

    if (isLoading) {
      return <div className="loading-state col-12"><Spinner /></div>;
    }


    return (
      <ListGroup className="search-result-list col-12">
        { isErrored ? <ErrorListItem /> :
          this.renderSearchItems()
        }
      </ListGroup>);
  }
}
