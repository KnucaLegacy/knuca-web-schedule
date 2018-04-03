import React, { PureComponent } from "react";
import GroupListItem from "./GroupListItem";
import ErrorListItem from "./ErrorListItem";
import Spinner from './Spinner';
import { ListGroup } from 'reactstrap';

export default class GroupList extends PureComponent {
  componentDidMount() {

    if (this.props.groupsState.groups.length === 0) {
      this.props.fetchGroups();
    }
  }

  render() {
    let { groups, isLoading, isErrored, searchQuery } = this.props.groupsState;

    if (isLoading) {
      return <div className="loading-state col-12"><Spinner /></div>;
    }

    let filteredGroups = groups.filter(group => group.name.toLowerCase().includes(searchQuery));
    return (
      <ListGroup className="search-result-list col-12">
        { isErrored ? <ErrorListItem/> :
            filteredGroups.map(group => 
              <GroupListItem group={group} key={group.id} />
            )
        }
      </ListGroup>);
  }
}
