import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';

const actions = createActions({
  [actionTypes.OPEN_KEY_RESULT_FORM_MODAL]: (objective) => ({ objective }),
  [actionTypes.CLOSE_KEY_RESULT_FORM_MODAL]: () => {},
  [actionTypes.OPEN_OBJECTIVE_FORM_MODAL]: (objective) => ({objective}),
  [actionTypes.CLOSE_OBJECTIVE_FORM_MODAL]: () => {},
  [actionTypes.OPEN_OBJECTIVE_DETAIL_MODAL]: (objectiveId) => ({objectiveId}),
  [actionTypes.CLOSE_OBJECTIVE_DETAIL_MODAL]: () => {},
});

export default actions;
