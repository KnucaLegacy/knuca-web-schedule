import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const SearchListItem = ({ item }) => (
  <ListGroupItem tag="a" action>{item.name}</ListGroupItem>
);

SearchListItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default SearchListItem;
