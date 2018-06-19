import { all, put, takeLatest } from 'redux-saga/effects';
import call from '../utils/call';
import API from '../utils/api';
import withLoading from '../utils/withLoading';
import userActions from '../actions/users';
import actionTypes from '../constants/actionTypes';
import toastActions from '../actions/toasts';

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
  yield put(userActions.removedUser(result.get('user')));
  yield put(toastActions.showToast('ユーザーを無効化しました'));
}

function* restoreUser({ payload }) {
  const result = yield call(API.put, `/users/${payload.id}/restore`, {});
  yield put(userActions.restoredUser(result.get('user')));
  yield put(toastActions.showToast('ユーザーを有効化しました'));
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
  yield call(API.put, '/users/password', { user: payload.user })
  location.href = '/'
}

function* setPassword({ payload }) {
  yield call(API.put, '/users/confirmation', { user: payload.user })
  location.href = '/'
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

function* resendEmail({ payload }) {
  yield call(API.put, `/users/${payload.id}/resend`, {});
  yield put(toastActions.showToast('確認メールを再送信しました', 'success'));
}

export function* userSagas() {
  yield all([
    takeLatest(actionTypes.ADD_USER, withLoading(addUser)),
    takeLatest(actionTypes.UPDATE_USER, withLoading(updateUser)),
    takeLatest(actionTypes.REMOVE_USER, withLoading(removeUser)),
    takeLatest(actionTypes.RESTORE_USER, withLoading(restoreUser)),
    takeLatest(actionTypes.UPDATE_PASSWORD, withLoading(updatePassword)),
    takeLatest(actionTypes.RECOVER_PASSWORD, withLoading(recoverPassword)),
    takeLatest(actionTypes.EDIT_PASSWORD, withLoading(editPassword)),
    takeLatest(actionTypes.SET_PASSWORD, withLoading(setPassword)),
    takeLatest(actionTypes.UPDATE_EMAIL, withLoading(updateEmail)),
    takeLatest(actionTypes.UPDATE_AVATAR, withLoading(updateAvatar)),
    takeLatest(actionTypes.UPDATE_CURRENT_ORGANIZATION_ID, withLoading(updateCurrentOrganizationId)),
    takeLatest(actionTypes.RESEND_EMAIL, withLoading(resendEmail)),
  ]);
}
