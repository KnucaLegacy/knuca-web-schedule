import { ActionTypes as types } from './Action-types';
import { fetchGroups } from '../api/GroupsDataManager';
import AppDispatcher from '../dispatcher/AppDispatcher';

const groupsFetchSuccess = groups => ({
  type: types.FETCH_GROUPS_SUCCESS,
  groups,
});

const groupsIsLoading = bool => ({
  type: types.FETCH_GROUPS_REQUEST,
  isLoading: bool,
});

const groupsIsErrored = () => ({
  type: types.FETCH_GROUPS_ERROR,
  isErrored: true,
});

export const searchGroups = query => AppDispatcher.dispatch({
  type: types.FILTER_GROUPS,
  searchQuery: query,
});

export async function groupsFetchData() {
  try {
    AppDispatcher.dispatch(groupsIsLoading(true));

    const groups = await fetchGroups();

    AppDispatcher.dispatch(groupsIsLoading(false));
    AppDispatcher.dispatch(groupsFetchSuccess(groups));
  } catch (error) {
    AppDispatcher.dispatch(groupsIsLoading(false));
    AppDispatcher.dispatch(groupsIsErrored());
  }
}
