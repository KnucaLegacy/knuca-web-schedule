import React from 'react';
import { ListGroupItem } from 'reactstrap';

const GroupListItem = ({ group }) => (
  <ListGroupItem tag="a" action>{group.name}</ListGroupItem>
);

export default GroupListItem;
