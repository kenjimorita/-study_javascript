import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, List } from 'semantic-ui-react';
import UserSelectBox from './UserSelectBox';
import Avatar from './Avatar';

class KeyResultMemberSelectBox extends Component {
  selectedMembersTag({users, keyResultMembers, add, remove}) {
    const list = keyResultMembers.map(id => {
      const user = users.find(item => item.get('id') === id);
      return (
        <List.Item key={id} className="key-result-members-select-box__item">
          <Avatar user={user} size='small' />
          <List.Content className="key-result-members-select-box__name">{`${user.get('lastName')} ${user.get('firstName')}`}</List.Content>
          <List.Content><Icon link name="close" className="key-result-members-select-box__close" onClick={() => {remove(id)}} /></List.Content>
        </List.Item>
      )
    });
    return <List horizontal className="key-result-members-select-box__selected">{list}</List>;
  }
  render() {
    const {
      users,
      keyResultMembers,
      ownerId,
      add,
      remove,
    } = this.props;

    const selectableMembers = users.filter(user => {
      const userId = user.get('id');
      return !keyResultMembers.includes(userId) && userId !== ownerId;
    });
    return (
      <div className="key-result-members-select-box">
        { selectableMembers.size > 0 && 
            <UserSelectBox
              users={selectableMembers} 
              onChange={(value) => {add(value)}}
            />
        }
        {this.selectedMembersTag(this.props)}
      </div>
    )
  }
}

KeyResultMemberSelectBox.propTypes = {
  users: PropTypes.object.isRequired,
  keyResultMembers: PropTypes.array.isRequired,
  ownerId: PropTypes.number,
  add: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

export default KeyResultMemberSelectBox;
