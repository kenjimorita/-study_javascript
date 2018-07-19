import { all, put, select, take, takeLatest } from 'redux-saga/effects'
import currentActions from '../actions/current'
import objectiveActions from '../actions/objectives'
import ActionTypes from '../constants/actionTypes'
import { List } from 'immutable'

function* selectOkrPeriod({ payload }) {
  const { okrPeriodId } = payload
  yield put(currentActions.selectedOkrPeriod(okrPeriodId))

  const userId = yield select(state => state.current.get('userId'))
  yield put(objectiveActions.fetchOkrs(okrPeriodId, userId))
}

function* selectUser({ payload }) {
  const { userId } = payload
  yield put(currentActions.selectedUser(userId))

  const okrPeriodId = yield select(state => state.current.get('okrPeriodId'))
  yield put(objectiveActions.fetchOkrs(okrPeriodId, userId, false))
}

function* selectOkr({ payload }) {
  const { objectiveId, keyResultId } = payload
  yield put(currentActions.selectMapOkr(objectiveId, keyResultId))
}

function* clearSelectedOkr({ payload }) {
  yield put(currentActions.clearMapOkr())
}

function* selectMapOkr({ payload }) {
  const { objectiveId, keyResultId } = payload
  let isFetched = yield isFetchedObjective(objectiveId)
  if (!isFetched) {
    yield put(objectiveActions.fetchObjective(objectiveId)) // with loading
    yield take(ActionTypes.FETCHED_OBJECTIVE)
  }
  const objective = yield select(state => state.entities.objectives.get(objectiveId))
  const keyResultIds = keyResultId ? List.of(keyResultId) : objective.get('keyResultIds')
  yield put(currentActions.selectedMapOkr(objectiveId, keyResultIds, objective.get('parentKeyResultId')))
  isFetched = yield isFetchedChildObjectives(keyResultIds)
  if (!isFetched) {
    yield put(objectiveActions.fetchObjective(objectiveId)) // with loading
  }
}

function* expandObjective({ payload }) {
  const { objectiveId, keyResultIds, parentKeyResultId, toAncestor } = payload
  const isFetched = yield (toAncestor ? isFetchedObjective(objectiveId) : isFetchedChildObjectives(keyResultIds))
  if (!isFetched) {
    yield put(objectiveActions.fetchObjective(objectiveId)) // with loading
    yield take(ActionTypes.FETCHED_OBJECTIVE)
  }
  yield put(currentActions.expandedObjective(objectiveId, keyResultIds, parentKeyResultId, toAncestor))
}

function* expandKeyResult({ payload }) {
  const { objectiveId, keyResultId, parentKeyResultId } = payload
  const isFetched = yield isFetchedChildObjectives(List.of(keyResultId))
  if (!isFetched) {
    yield put(objectiveActions.fetchObjective(objectiveId)) // with loading
    yield take(ActionTypes.FETCHED_OBJECTIVE)
  }
  yield put(currentActions.expandedKeyResult(objectiveId, keyResultId, parentKeyResultId))
}

function* isFetchedObjective(objectiveId) {
  return yield select(state => state.entities.objectives.has(objectiveId))
}

// KR 一覧に未 fetch の子 O が紐付いている場合は fetch する
function* isFetchedChildObjectives(keyResultIds) {
  return yield select(state => keyResultIds.every(keyResultId => {
    const keyResult = state.entities.keyResults.get(keyResultId)
    return keyResult.get('childObjectiveIds').every(childObjectiveId => state.entities.objectives.has(childObjectiveId))
  }))
}

export function* currentSagas() {
  yield all([
    takeLatest(ActionTypes.SELECT_OKR_PERIOD, selectOkrPeriod),
    takeLatest(ActionTypes.SELECT_USER, selectUser),
    takeLatest(ActionTypes.SELECT_OKR, selectOkr),
    takeLatest(ActionTypes.CLEAR_SELECTED_OKR, clearSelectedOkr),
    takeLatest(ActionTypes.SELECT_MAP_OKR, selectMapOkr),
    takeLatest(ActionTypes.EXPAND_OBJECTIVE, expandObjective),
    takeLatest(ActionTypes.EXPAND_KEY_RESULT, expandKeyResult),
  ])
}
