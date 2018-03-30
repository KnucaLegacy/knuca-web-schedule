import { ActionTypes as types } from './Action-types';
import { fetchGroups } from '../api/GroupsDataManager';
import AppDispatcher from '../dispatcher/AppDispatcher';

const groupsFetchSuccess = (groups) => ({
    type: types.FETCH_GROUPS_SUCCESS,
    groups,
});

const groupsIsLoading = () => ({
    type: types.FETCH_GROUPS_REQUEST,
    isLoading: true
});

const groupsIsErrored = () => ({
    type: types.FETCH_GROUPS_REQUEST,
    isErrored: true
});

export async function groupsFetchData() {
    try {
        AppDispatcher.dispatch(groupsIsLoading());

        let groups = await fetchGroups();

        AppDispatcher.dispatch(groupsFetchSuccess(groups));

    } catch (error) {
        AppDispatcher.dispatch(groupsIsErrored());
    }
}