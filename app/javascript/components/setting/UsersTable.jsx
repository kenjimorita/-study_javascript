import React, { PureComponent } from 'react';
import { Table, Pagination } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes'
import UsersTableRow from './UsersTableRow';

class UsersTable extends PureComponent {

  static NUMBER_TO_DISPLAY = 50;

  constructor(props) {
    super(props);
    this.state = {
      column: 'index',
      users: this.getUsers(props.users),
      direction: 'ascending',
      activePage: 1,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      activePage: this.props.keyword !== nextProps.keyword ? 1 : this.state.activePage,
      users: this.getSortedUsers(this.getUsers(nextProps.users), this.state.column, this.state.direction),
    });
  }

  updateUser = id => values => this.props.onUpdateUser({ id, ...values })

  changeEmail = id => email => {
    this.props.confirm({
      content: `${email} に確認メールを送信します。メール中の URL がクリックされると処理が完了します。メールアドレスを変更しますか？`,
      onConfirm: () => {
        const notLogout = id !== this.props.loginUserId;
        this.props.onUpdateEmail({ id, email, notLogout });
      },
      onCancel: () => this.forceUpdate(), // 入力内容を破棄する
    });
  }

  resendEmail = user => {
    this.props.confirm({
      content: `${user.get('email')} に確認メールを再送信しますか？`,
      onConfirm: () => this.props.onResendEmail(user.get('id')),
    });
  }

  getUsers = (users) => (
    users.map((user, index) =>
      user.set('index', index + 1)
        .set('email', user.get('email'))
        .set('searchText', `${user.get('firstName')} ${user.get('lastName')} ${user.get('email')}`.toLowerCase())
    )
  )

  getSortedUsers = (users, column, direction) => {
    const sortedUsers = users.sort((a, b) => {
      if (typeof a.get(column) === 'string') {
        return a.get(column).localeCompare(b.get(column));
      } else {
        if (a.get(column) < b.get(column)) { return -1; }
        if (a.get(column) > b.get(column)) { return 1; }
        if (a.get(column) === b.get(column)) { return 0; }
      }
    });
    return direction === 'ascending' ? sortedUsers : sortedUsers.reverse();
  }

  sort = column => () => {
    const direction = this.state.column !== column ? 'ascending'
      : this.state.direction === 'ascending' ? 'descending' : 'ascending';
    this.setState({
      column: column,
      users: this.getSortedUsers(this.state.users, column, direction),
      direction: direction,
    });
  };

  getFilteredUsers = (users, keyword) => {
    if (!keyword) return users
    keyword = keyword.toLowerCase()
    return users.filter(user => user.get('searchText').includes(keyword))
  }

  removeUser = user => {
    this.props.confirm({
      content: `ユーザー "${user.get('lastName')} ${user.get('firstName')}" を無効化しますか？`,
      onConfirm: () => this.props.onRemove(user.get('id')),
    });
  };

  restoreUser = user => {
    this.props.confirm({
      content: `ユーザー "${user.get('lastName')} ${user.get('firstName')}" を有効化しますか？`,
      onConfirm: () => this.props.onRestore(user.get('id')),
    });
  };

  handlePageChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    const { column, direction, users, activePage } = this.state;
    const filteredUsers = this.getFilteredUsers(users, this.props.keyword);
    const begin = (activePage - 1) * UsersTable.NUMBER_TO_DISPLAY;
    const end = Math.min(filteredUsers.size, activePage * UsersTable.NUMBER_TO_DISPLAY);
    const totalPages = Math.ceil(filteredUsers.size / UsersTable.NUMBER_TO_DISPLAY);
    return (
      <div className="users-table">
        <Table singleLine sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'index' ? direction : null} onClick={this.sort('index')} textAlign='center' />
              <Table.HeaderCell disabled />
              <Table.HeaderCell sorted={column === 'lastName' ? direction : null} onClick={this.sort('lastName')}>
                名前
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'email' ? direction : null} onClick={this.sort('email')}>
                メールアドレス
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'isAdmin' ? direction : null} onClick={this.sort('isAdmin')}>
                権限
              </Table.HeaderCell>
              <Table.HeaderCell disabled />
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {filteredUsers.slice(begin, end).map(user => {
              const id = user.get('id');
              return <UsersTableRow key={id}
                                    user={user}
                                    isLoginUser={id === this.props.loginUserId}
                                    updateUser={this.updateUser(id)}
                                    changeEmail={this.changeEmail(id)}
                                    resendEmail={this.resendEmail}
                                    removeUser={this.removeUser}
                                    restoreUser={this.restoreUser}
              />
            })}
          </Table.Body>

          <Table.Footer>
            <Table.Row>
              <Table.HeaderCell colSpan='6' textAlign='right'>
                {totalPages > 0 && (
                  <Pagination activePage={activePage} firstItem={null} lastItem={null} totalPages={totalPages}
                              prevItem={activePage === 1 ? null : undefined}
                              nextItem={activePage === totalPages ? null : undefined}
                              onPageChange={this.handlePageChange} />
                )}
              </Table.HeaderCell>
            </Table.Row>
          </Table.Footer>
        </Table>
      </div>
    );
  }
}

UsersTable.propTypes = {
  // container
  // component
  users: ImmutablePropTypes.list.isRequired,
  loginUserId: PropTypes.number,
  onUpdateUser: PropTypes.func,
  onUpdateEmail: PropTypes.func,
  onResendEmail: PropTypes.func,
  onRemove: PropTypes.func,
  onRestore: PropTypes.func,
  confirm: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
};

export default UsersTable;
