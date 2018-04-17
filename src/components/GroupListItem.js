import React from 'react';
import PropTypes from 'prop-types';
import { ListGroupItem } from 'reactstrap';

const GroupListItem = ({ group }) => (
  <ListGroupItem tag="a" action>{group.name}</ListGroupItem>
);

GroupListItem.propTypes = {
  group: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default GroupListItem;
