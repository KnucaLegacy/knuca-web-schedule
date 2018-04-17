import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes as types } from '../actions/Action-types';


const initialState = {
  groups: [],
  isLoading: false,
  isErrored: false,
  searchQuery: '',
};

class GroupListStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return initialState;
  }

  getGroupsNames() {
    return this.getState().groups.map(group => group.name);
  }

  reduce(state, action) {
    switch (action.type) {
      case types.FETCH_GROUPS_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
      case types.FETCH_GROUPS_SUCCESS:
        return {
          ...state,
          groups: action.groups,
        };
      case types.FETCH_GROUPS_ERROR:
        return {
          ...state,
          isErrored: action.isErrored,
        };
      case types.FILTER_GROUPS:
        return {
          ...state,
          searchQuery: action.searchQuery.toLowerCase(),
        };
      default: return state;
    }
  }
}

export default new GroupListStore();
