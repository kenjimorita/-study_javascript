import Avatar from '../components/util/Avatar';
import { connect } from 'react-redux';
import dialogActions from '../actions/dialogs';

const mapStateToProps = (state) => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    openAvatarModal: (targetId, imageData) => {
      dispatch(dialogActions.openAvatarModal(targetId, imageData));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);
