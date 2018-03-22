import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'semantic-ui-react';
import avatar_image from '../../images/avatar.png';

class UserSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {
      defaultValue: props.defaultValue,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ defaultValue: nextProps.defaultValue });
  }

  userOptions = () => {
    return this.props.users.map(user => ({
      key: user.get('id'),
      value: user.get('id'),
      text: `${user.get('lastName')} ${user.get('firstName')}`,
      image: { avatar: true, src: user.get('avatarUrl') || avatar_image },
      email: user.get('email'),
    })).toArray();
  }

  handleChange = (event, { value }) => {
    const isChanged = typeof value === 'number'
      ? value !== this.state.defaultValue
      : JSON.stringify(value) !== JSON.stringify(this.state.defaultValue);
    if (isChanged) {
      this.setState({ defaultValue: value });
      this.props.onChange(value);
    }
  }

  search = (options, query) => {
    return options.filter(option => option.text.includes(query) || option.email.includes(query))
  }

  render() {
    return (
      <div>
        <Select
          key={this.props.id}
          search={this.search}
          options={this.userOptions()}
          defaultValue={this.state.defaultValue}
          multiple={this.props.multiple}
          onChange={this.handleChange}
          loading={this.props.users.isEmpty()}
          selectOnNavigation={false}
        />
      </div>
    )
  }
}

UserSelect.propTypes = {
  id: PropTypes.number,
  users: PropTypes.object.isRequired,
  defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
  multiple: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

UserSelect.defaultProps = {
  multiple: false,
};

export default UserSelect;
