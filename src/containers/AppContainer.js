import React, { Component } from 'react';
import { Container } from 'flux/utils';
import App from '../components/App';

import SearchListStore from '../stores/SearchListStore';
import LessonsStore from '../stores/LessonsStore';

import { fetchSearchItems, searchItems } from '../actions/SearchItemsActions';
import { fetchLessons } from '../actions/LessonsActions';

import withUrlProp from '../utils/withUrlProp';


function onInputChange(event) {
  searchItems(event.target.value);
}

class AppContainer extends Component {
  static getStores() {
    return [
      SearchListStore,
      LessonsStore,
    ];
  }

  static calculateState() {
    const itemsState = SearchListStore.getState();
    const lessonsState = LessonsStore.getState();
    const searchState = {
      isLoading: itemsState.isLoading,
      isErrored: itemsState.isErrored,
      searchQuery: itemsState.searchQuery,
    };
    const { groups, rooms, teachers } = itemsState.searchItems;
    let items = [];

    if (
      groups.length > 0 &&
      items.length === 0
    ) {
      const groupsWithUrl = groups.map(item => withUrlProp(item, '/lessons/group/'));
      const roomsWithUrl = rooms.map(item => withUrlProp(item, '/lessons/room/'));
      const teachersWithUrl = teachers.map(item => withUrlProp(item, '/lessons/teacher/'));

      items = [
        ...groupsWithUrl,
        ...roomsWithUrl,
        ...teachersWithUrl,
      ];
    }

    return {
      items,
      searchState,
      lessonsState,

      fetchSearchItems,
      fetchLessons,

      onInputChange,
    };
  }

  render() {
    return <App {...this.state} />;
  }
}


export default Container.create(AppContainer);
