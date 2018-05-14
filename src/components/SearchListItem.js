import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';
import { searchItems } from '../actions/SearchItemsActions';

const SearchListItem = ({ item, fetchLessons }) => (
  <ListGroupItem
      tag="a"
      action
      onClick={() => {
        const url = `${item.url}/${item.id}`;
        searchItems(item.name);
        fetchLessons(url);
      }}
  >
    {item.name}
  </ListGroupItem>
);

SearchListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
  }),
};
searchItems('');
export default SearchListItem;
