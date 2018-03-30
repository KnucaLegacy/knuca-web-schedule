import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes as types } from '../actions/Action-types';


const initialState = {
    groups:{},
    isLoading: false,
    isErrored: false,
};

class GroupListStore extends ReduceStore {
    constructor() {
        super(AppDispatcher);
    }

    getInitialState() {
        return initialState;
    }

    getGroupsNames() {
        return this.getState().map(el => el.name);
    }

    reduce(state, action) {
        switch(action.type) {
            case types.FETCH_GROUPS_REQUEST:
                return {
                    ...state,
                    isLoading: true
                };
            case types.FETCH_GROUPS_SUCCESS:
                return {
                    ...state,
                    groups: action.groups
                };
            case types.FETCH_GROUPS_ERROR:
                return {
                    ...state,
                    isErrored: true
                };
            default: return state;
        }
    }
}

export default new GroupListStore();
