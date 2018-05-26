import { ActionTypes as types } from './Action-types';
import { getLessons } from '../api/LessonsDataManager';
import AppDispatcher from '../dispatcher/AppDispatcher';


const lessonsFetchSuccess = (lessons, searchItem) => ({
  type: types.FETCH_LESSONS_SUCCESS,
  lessons,
  searchItem,
  isFetched: true,
});

const lessonsIsLoading = bool => ({
  type: types.FETCH_LESSONS_REQUEST,
  isLoading: bool,
  isFetched: !bool,
});

const lessonsIsErrored = error => ({
  type: types.FETCH_LESSONS_ERROR,
  isErrored: true,
  isFetched: false,
  error,
});

export async function fetchLessons(url, searchItem) {
  try {
    AppDispatcher.dispatch(lessonsIsLoading(true));
    const lessons = await getLessons(url);

    AppDispatcher.dispatch(lessonsIsLoading(false));
    AppDispatcher.dispatch(lessonsFetchSuccess(lessons, searchItem));
  } catch (error) {
    AppDispatcher.dispatch(lessonsIsLoading(false));
    AppDispatcher.dispatch(lessonsIsErrored(error));
  }
}
