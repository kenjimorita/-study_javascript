import { createActions } from 'redux-actions';
import actionTypes from '../constants/actionTypes';
import { normalizeObjective, normalizeObjectives } from '../schemas/index'

const actions = createActions({
  [actionTypes.FETCH_OKRS]: (okrPeriodId, userId, withAll) => ({ okrPeriodId, userId, withAll }),
  [actionTypes.FETCH_OBJECTIVE]: (objectiveId, keyResultId) => ({ objectiveId, keyResultId }),
  [actionTypes.FETCHED_OBJECTIVE]: (objective) => normalizeObjective(objective),
  [actionTypes.FETCHED_OBJECTIVE_ERROR]: () => {},
  [actionTypes.FETCH_OBJECTIVES]: (okrPeriodId, userId) => ({ okrPeriodId, userId }),
  [actionTypes.FETCHED_OBJECTIVES]: objectives => normalizeObjectives(objectives),
  [actionTypes.FETCH_ALL_OBJECTIVES]: okrPeriodId => ({ okrPeriodId }),
  [actionTypes.FETCHED_ALL_OBJECTIVES]: objectives => normalizeObjectives(objectives),
  [actionTypes.ADD_OBJECTIVE]: (objective, currentUserId) => ({ objective, currentUserId }),
  [actionTypes.ADDED_OBJECTIVE]: (objective, currentUserId) => normalizeObjective(objective).set('currentUserId', currentUserId),
  [actionTypes.UPDATE_OBJECTIVE]: (objective, currentUserId, isToast = true) => ({ objective, currentUserId, isToast }),
  [actionTypes.UPDATED_OBJECTIVE]: (objective, currentUserId) => normalizeObjective(objective).set('currentUserId', currentUserId),
  [actionTypes.REMOVE_OBJECTIVE]: id => ({ id }),
  [actionTypes.REMOVED_OBJECTIVE]: objective => normalizeObjective(objective),
});

export default actions;
