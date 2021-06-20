import * as actions from '../action.types';

export const setCurrentUser = user => ({
  type: actions.SET_CURRENT_USER,
  payload: user
});