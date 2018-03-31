import React, { PureComponent } from "react";
import GroupListItem from "./GroupListItem";
import ErrorListItem from "./ErrorListItem";
import { ListGroup } from 'reactstrap';

export default class GroupList extends PureComponent {
  componentDidMount() {
    let { groups, fetchGroups } = this.props;

    if (groups.length === 0) {
      fetchGroups();
    }
  }

  render() {
    let { groups, isLoading, isErrored } = this.props;

    if (isLoading) {
      return <div className="loading-state col-8">...Loading</div>;
    }

  return (
    <ListGroup className="search-result-list col-4">
      { isErrored ? <ErrorListItem/> :
          groups.map(group => 
            <GroupListItem group={group} key={group.id} />
          )
      }
    </ListGroup>);
  }
}
