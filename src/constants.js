import firebase from 'firebase';

const firebaseConf = {
  apiKey: "AIzaSyAHHNXxfL04NxxSYBIawr1qG15p6L9gex0",
  authDomain: "bobonroast.firebaseapp.com",
  databaseURL: "https://bobonroast.firebaseio.com",
  storageBucket: "bobonroast.appspot.com"
};
firebase.initializeApp(firebaseConf);

const C = {
  // Auth actions.
  LOGIN_REQUEST: 'LOGIN_REQUEST',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILED: 'LOGIN_FAILED',
  LOGOUT: 'LOGOUT',
  LISTENING_TO_AUTH: 'LISTENING_TO_AUTH',

  // Roasts actions.
  FETCHING_ROASTS: 'FETCHING_ROASTS',
  FETCHED_ROASTS: 'FETCHED_ROASTS',

  CREATING_NEW_ROAST: 'CREATING_NEW_ROAST',
  REMOVE_ROAST: 'REMOVE_ROAST',
  CREATE_NEW_ROAST_SUCCESS: 'CREATE_NEW_ROAST_SUCCESS',
  CREATE_NEW_ROAST_FAILED: 'CREATE_NEW_ROAST_FAILED',
  UPDATE_ROAST_VALUE: 'UPDATE_ROAST_VALUE',
  UPDATE_CURRENT_ROAST_VALUE: 'UPDATE_CURRENT_ROAST_VALUE',
  TOGGLE_EDITING_FIELD: 'TOGGLE_EDITING_FIELD',

  // Editing types.
  FIELD_POST_ROAST_NOTE: 'FIELD_POST_ROAST_NOTE',

  // Editing field staatus.
  FIELD_STATUS_LOADING: 'FIELD_STATUS_LOADING',
  FIELD_STATUS_EDITING: 'FIELD_STATUS_EDITING',
  FIELD_STATUS_NOT_EDITING: 'FIELD_STATUS_NOT_EDITING',

  // Roasting actions.
  ROAST_START: 'ROAST_START',
  CHECK_ROAST_IN_PROGRESS: 'CHECK_ROAST_IN_PROGRESS',
  CLEAR_ROAST_IN_PROGRESS: 'CLEAR_ROAST_IN_PROGRESS',

  // StopWatch actions.
  STOPWATCH_START: 'STOPWATCH_START',
  STOPWATCH_TICK: 'STOPWATCH_TICK',
  STOPWATCH_STOP: 'STOPWATCH_STOP',
  STOPWATCH_RESUME: 'STOPWATCH_STOP',

  // New roast status.
  ROAST_UNSAVED: 'ROAST_UNSAVED',
  ROAST_PENDING: 'ROAST_PENDING',
  ROAST_CREATED: 'ROAST_CREATED',
  ROAST_IN_PROGRESS: 'ROAST_IN_PROGRESS',
  ROAST_COMPLETED: 'ROAST_COMPLETED',

  // Auth states.
  LOGGED_IN: 'LOGGED_IN',
  LOGGING_IN: 'LOGGING_IN',
  LOGGED_OUT: 'LOGGED_OUT',

  // MISC.
  FIREBASE: firebase
};

export default C;
