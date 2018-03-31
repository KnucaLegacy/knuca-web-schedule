import React from "react";
import { ListGroupItem } from 'reactstrap';

const GroupListItem = ({ group }) => {
  return (
    <ListGroupItem tag="a" action>{group.name}</ListGroupItem>
  );
};

export default GroupListItem;