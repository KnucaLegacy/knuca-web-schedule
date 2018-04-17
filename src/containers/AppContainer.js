import React, { Component } from 'react';
import { Container } from 'flux/utils';
import App from '../components/App';
import GroupListStore from '../stores/GroupListStore';
import { groupsFetchData, searchGroups } from '../actions/GroupActions';


function onInputChange(event) {
  searchGroups(event.target.value);
}

class AppContainer extends Component {
  static getStores() {
    return [GroupListStore];
  }

  static calculateState() {
    const groupsState = GroupListStore.getState();

    return {
      groupsState,
      fetchGroups: groupsFetchData,

      onInputChange,
    };
  }

  render() {
    return <App {...this.state} />;
  }
}


export default Container.create(AppContainer);
