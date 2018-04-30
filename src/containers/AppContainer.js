import React, { Component } from 'react';
import { Container } from 'flux/utils';
import App from '../components/App';
import SearchListStore from '../stores/SearchListStore';
import { fetchSearchItems, searchItems } from '../actions/GroupActions';


function onInputChange(event) {
  searchItems(event.target.value);
}

class AppContainer extends Component {
  static getStores() {
    return [SearchListStore];
  }

  static calculateState() {
    const searchItemsState = SearchListStore.getState();

    return {
      searchItemsState,
      fetchSearchItems,

      onInputChange,
    };
  }

  render() {
    return <App {...this.state} />;
  }
}


export default Container.create(AppContainer);
