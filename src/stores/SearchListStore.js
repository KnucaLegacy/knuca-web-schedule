import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes as types } from '../actions/Action-types';


const initialState = {
  searchItems: {
    groups: [],
    teachers: [],
    rooms: [],
    items: [],
  },
  isLoading: false,
  isErrored: false,
  searchQuery: '',
};

class SearchListStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return initialState;
  }

  reduce(state, action) {
    switch (action.type) {
      case types.FETCH_SEARCH_ITEMS_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
      case types.FETCH_SEARCH_ITEMS_SUCCESS:
        return {
          ...state,
          searchItems: action.searchItems,
        };
      case types.FETCH_SEARCH_ITEMS_ERROR:
        return {
          ...state,
          isErrored: action.isErrored,
          error: action.error,
        };
      case types.FILTER_SEARCH_ITEMS:
        return {
          ...state,
          searchQuery: action.searchQuery.toLowerCase(),
        };
      default: return state;
    }
  }
}

export default new SearchListStore();
