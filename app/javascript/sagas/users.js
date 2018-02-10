import { all, put, takeLatest } from 'redux-saga/effects';
import call from '../utils/call';
import API from '../utils/api';
import withLoading from '../utils/withLoading';
import userActions from '../actions/users';
import actionTypes from '../constants/actionTypes';
import toastActions from '../actions/toasts';

function* fetchUser({ payload }) {
  const result = yield call(API.get, '/users/' + payload.id);
  yield put(userActions.fetchedUser(result));
}

function* fetchUsers() {
  const result = yield call(API.get, '/users');
  yield put(userActions.fetchedUsers(result.get('users')));
}

function* addUser({ payload }) {
  const result = yield call(API.post, '/users', { user: payload.user });
  yield put(userActions.addedUser(result.get('user')));
  yield put(toastActions.showToast('ユーザーを追加しました'));
}

function* updateUser({ payload }) {
  const result = yield call(API.put, '/users/' + payload.user.id, { user: payload.user });
  yield put(userActions.updatedUser(result.get('user')));
  yield put(toastActions.showToast('ユーザー情報を更新しました'));
}

function* removeUser({ payload }) {
  const result = yield call(API.delete, '/users/' + payload.id);
  yield put(userActions.removedUser(result));
  yield put(toastActions.showToast('ユーザーを削除しました'));
}

function* restoreUser({ payload }) {
  const result = yield call(API.put, `/users/${payload.id}/restore`, {});
  yield put(userActions.restoredUser(result));
  yield put(toastActions.showToast('ユーザーを復元しました'));
}

function* updatePassword({ payload }) {
  const result = yield call(API.put, `/users/${payload.user.id}/password`, { user: payload.user });
  yield put(userActions.updatedUser(result));
  yield put(toastActions.showToast('パスワードを変更しました', 'success'));
}

function* recoverPassword({ payload }) {
  const result = yield call(API.post, '/users/password', { user: payload.user });
  yield put(userActions.recoveredPassword(result));
}

function* editPassword({ payload }) {
  const result = yield call(API.put, '/users/password', { user: payload.user });
  yield put(userActions.editedPassword(result));
}

function* updateEmail({ payload }) {
  const result = yield call(API.put, '/users/' + payload.user.id, { user: payload.user });
  yield put(userActions.updatedEmail(result.get('user').set('notLogout', payload.user.notLogout)));
  yield put(toastActions.showToast('メールアドレスを変更しました', 'success'));
}

function* updateAvatar({ payload }) {
  const result = yield call(API.put, '/users/' + payload.user.id, { user: payload.user });
  yield put(userActions.updatedAvatar(result.get('user')));
}

function* updateCurrentOrganizationId({ payload }) {
  const result = yield call(API.put, '/users/' + payload.user.id + '/current_organization_id', { user: payload.user });
  yield put(userActions.updatedCurrentOrganizationId(result.get('user')));
}

export function* userSagas() {
  yield all([
    takeLatest(actionTypes.FETCH_USER, withLoading(fetchUser)),
    takeLatest(actionTypes.FETCH_USERS, withLoading(fetchUsers)),
    takeLatest(actionTypes.ADD_USER, withLoading(addUser)),
    takeLatest(actionTypes.UPDATE_USER, withLoading(updateUser)),
    takeLatest(actionTypes.REMOVE_USER, withLoading(removeUser)),
    takeLatest(actionTypes.RESTORE_USER, withLoading(restoreUser)),
    takeLatest(actionTypes.UPDATE_PASSWORD, withLoading(updatePassword)),
    takeLatest(actionTypes.RECOVER_PASSWORD, withLoading(recoverPassword)),
    takeLatest(actionTypes.EDIT_PASSWORD, withLoading(editPassword)),
    takeLatest(actionTypes.UPDATE_EMAIL, withLoading(updateEmail)),
    takeLatest(actionTypes.UPDATE_AVATAR, withLoading(updateAvatar)),
    takeLatest(actionTypes.UPDATE_CURRENT_ORGANIZATION_ID, withLoading(updateCurrentOrganizationId)),
  ]);
}
