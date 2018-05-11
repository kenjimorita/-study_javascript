import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes'
import { Tab, Button } from 'semantic-ui-react';
import AutoInput from '../form/AutoInput';
import Logo from '../util/Logo';

class OrganizationSettingTab extends PureComponent {
  changeLogoImage = (event) => {
    if (!event.target.files.length) { return; }
    this.props.openLogoModal(this.props.organization.get('id'), event.target.files[0]);
    event.target.value = null;
  }

  deleteLogo = (event) => {
    this.props.confirm({
      content: '設定済みのロゴを削除しますか？',
      onConfirm: () => this.props.deleteLogo({id: this.props.organization.get('id'), removeLogo: true}),
    });
  }

  handleNameCommit = name => this.props.updateOrganization({id: this.props.organization.get('id'), name})

  render() {
    const organization = this.props.organization;
    const path = organization.get('logo').get('url');
    return (
      <Tab.Pane attached={false} className="organization-setting-tab">
        <dl>
          <dt>組織名</dt>
          <dd><AutoInput value={organization.get('name')} placeholder='会社名やチーム名など' onCommit={this.handleNameCommit}/></dd>
          <dt>ロゴ</dt>
          <dd>
            <Logo path={path} />
            <div className="logo-img-button">
              <label className="file-button">
                <input type="file" style={{display: "none"}} onChange={this.changeLogoImage} />
              </label>
              <Button className="change-button" content="変更する" positive />
              {path && <Button className="change-button" content="削除する" negative onClick={this.deleteLogo} />}
            </div>
          </dd>
        </dl>
      </Tab.Pane>
    );
  }
}

OrganizationSettingTab.propTypes = {
  // container
  organization: ImmutablePropTypes.map.isRequired,
  updateOrganization: PropTypes.func.isRequired,
  openLogoModal: PropTypes.func.isRequired,
  deleteLogo: PropTypes.func.isRequired,
  confirm: PropTypes.func.isRequired,
  // component
};

export default OrganizationSettingTab;
