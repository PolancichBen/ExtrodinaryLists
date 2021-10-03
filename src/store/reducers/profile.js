import { createAction, handleActions } from 'redux-actions';

const initialState = {
  isLoaded: false,
  notFound: false,
  data: {},
  error: null,
};

export const FETCH_PROFILE = {
  REQUEST: 'profile/FETCH_PROFILE.REQUEST',
  SUCCESS: 'profile/FETCH_PROFILE.SUCCESS',
  NOT_FOUND: 'profile/FETCH_PROFILE.NOT_FOUND',
  FAILURE: 'profile/FETCH_PROFILE.FAILURE',
};

export const fetchProfileActions = {
  request: createAction(FETCH_PROFILE.REQUEST),
  success: createAction(FETCH_PROFILE.SUCCESS),
  notFound: createAction(FETCH_PROFILE.NOT_FOUND),
  failure: createAction(FETCH_PROFILE.FAILURE),
};

export default handleActions(
  {
    [FETCH_PROFILE.REQUEST]: (state) => ({
      ...state,
      isLoaded: false,
      notFound: false,
      error: null,
    }),
    [FETCH_PROFILE.SUCCESS]: (state, action) => ({
      ...state,
      isLoaded: true,
      notFound: false,
      error: null,
      data: action.payload,
    }),
    [FETCH_PROFILE.NOT_FOUND]: (state) => ({
      ...state,
      isLoaded: true,
      notFound: true,
      error: null,
    }),
    [FETCH_PROFILE.FAILURE]: (state, action) => ({
      ...state,
      isLoaded: false,
      notFound: false,
      error: action.payload || 'Unknown error loading site data.',
    }),
  },
  initialState
);
