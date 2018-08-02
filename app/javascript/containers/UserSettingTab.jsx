import UserSettingTab from '../components/setting/UserSettingTab';
import { connect } from 'react-redux';
import userActions from '../actions/users';
import dialogActions from '../actions/dialogs';
import { getEnabledUsersForSetting, getDisabledUsersForSetting } from '../utils/selector'

const mapStateToProps = (state) => {
  return {
    loginUserId: state.loginUser.get('id'),
    organization: state.organizations.get('selected'),
    enabledUsers: getEnabledUsersForSetting(state),
    disabledUsers: getDisabledUsersForSetting(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addUser: user => {
      dispatch(userActions.addUser(user));
    },
    updateUser: user => {
      dispatch(userActions.updateUser(user));
    },
    updateEmail: (id, email) => {
      dispatch(userActions.updateUser({ id, email }));
    },
    removeUser: id => {
      dispatch(userActions.removeUser(id));
    },
    restoreUser: id => {
      dispatch(userActions.restoreUser(id));
    },
    resendEmail: id => {
      dispatch(userActions.resendEmail(id));
    },
    confirm: params => {
      dispatch(dialogActions.openConfirmModal(params));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserSettingTab);