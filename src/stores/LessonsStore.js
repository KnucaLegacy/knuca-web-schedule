import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatcher/AppDispatcher';
import { ActionTypes as types } from '../actions/Action-types';


const initialState = {
  lessons: [],
  isLoading: false,
  isErrored: false,
};

class LessonsStore extends ReduceStore {
  constructor() {
    super(AppDispatcher);
  }

  getInitialState() {
    return initialState;
  }

  reduce(state, action) {
    switch (action.type) {
      case types.FETCH_LESSONS_REQUEST:
        return {
          ...state,
          isLoading: action.isLoading,
        };
      case types.FETCH_LESSONS_SUCCESS:
        console.log(action.lessons);
        return {
          ...state,
          lessons: action.lessons,
        };
      case types.FETCH_LESSONS_ERROR:
        return {
          ...state,
          isErrored: action.isErrored,
          error: action.error,
        };
      default: return state;
    }
  }
}

export default new LessonsStore();
