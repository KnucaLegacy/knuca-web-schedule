import keyMirror from 'keymirror';

const ActionTypes = keyMirror({
  FETCH_GROUPS_REQUEST: null,
  FETCH_GROUPS_SUCCESS: null,
  FETCH_GROUPS_ERROR: null,
  FILTER_GROUPS: null,
});

export default ActionTypes;
