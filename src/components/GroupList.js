import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'reactstrap';
import GroupListItem from './GroupListItem';
import ErrorListItem from './ErrorListItem';
import Spinner from './Spinner';

export default class GroupList extends PureComponent {
  static propTypes = {
    groupsState: PropTypes.shape({
      groups: PropTypes.array,
      isLoading: PropTypes.bool,
      isErrored: PropTypes.bool,
      searchQuery: PropTypes.string,
    }),
    fetchGroups: PropTypes.func,
  }

  componentDidMount() {
    if (this.props.groupsState.groups.length === 0) {
      this.props.fetchGroups();
    }
  }

  render() {
    const {
      groups, isLoading, isErrored, searchQuery,
    } = this.props.groupsState;

    if (isLoading) {
      return <div className="loading-state col-12"><Spinner /></div>;
    }

    const filteredGroups = groups.filter(group => group.name.toLowerCase().includes(searchQuery));
    return (
      <ListGroup className="search-result-list col-12">
        { isErrored ? <ErrorListItem /> :
            filteredGroups.map(group =>
              <GroupListItem group={group} key={group.id} />,
            )
        }
      </ListGroup>);
  }
}
