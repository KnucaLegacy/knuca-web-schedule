import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const SearchListItem = ({ item, fetchLessons }) => (
  <ListGroupItem
      tag="a"
      action
      onClick={() => {
        console.log('item', item);
        const url = `${item.url}/${item.id}`;
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

export default SearchListItem;
