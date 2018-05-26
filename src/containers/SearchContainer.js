import React, { Component } from 'react';
import { Container } from 'flux/utils';

import SearchList from '../components/SearchList';
import SearchInput from '../components/SearchInput';

import SearchListStore from '../stores/SearchListStore';
import FilterItemsStore from '../stores/FilterItemsStore';

import {
  fetchSearchItems,
  searchItems,
  openSearchList,
  closeSearchList,
} from '../actions/SearchItemsActions';
import { fetchLessons } from '../actions/LessonsActions';

import withUrlProp from '../utils/withUrlProp';
import { loadState, saveState } from '../utils/localStorage';


function onInputChange(event) {
  searchItems(event.target.value);
}

function onFocus() {
  openSearchList();
}

function onBlur() {
  setTimeout(closeSearchList, 100);
}

class SearchContainer extends Component {
  static getStores() {
    return [
      SearchListStore,
      FilterItemsStore,
    ];
  }

  static calculateState() {
    const itemsState = SearchListStore.getState();
    const { searchQuery } = FilterItemsStore.getState();

    const searchState = {
      isLoading: itemsState.isLoading,
      isErrored: itemsState.isErrored,
      isCollapsed: itemsState.isCollapsed,
    };
    const items = getItems(itemsState);

    return {
      items,
      searchState,
      searchQuery,

      fetchSearchItems,
      fetchLessons,

      onInputChange,
      onFocus,
      onBlur,
    };
  }

  render() {
    return (
      <React.Fragment>
        <SearchInput {...this.state} />
        <SearchList {...this.state} />
      </React.Fragment>
    );
  }
}

function getItems(itemsState) {
  const { groups, rooms, teachers } = itemsState.searchItems;
  let items = loadState() || [];

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
    saveState(items);
  }
  return items;
}


export default Container.create(SearchContainer);
