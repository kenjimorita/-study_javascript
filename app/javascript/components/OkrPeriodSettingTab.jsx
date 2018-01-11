import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Tab, Table, Form, Button } from 'semantic-ui-react';
import EditableText from './utils/EditableText';
import DatePicker from './DatePicker';

class OkrPeriodSettingTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: null,
      direction: null,
    };
  }

  componentWillMount() {
    this.props.fetchObjectives(this.props.loginUser.get('id'));
  }

  render() {
    const objectives = Array.from(this.props.objectives);
    const { column, direction } = this.state;
    if (objectives.length === 0) {
      return null;
    }
    return (
      <Tab.Pane attached={false} className="okr-setting-tab">
        <Table singleLine sortable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={(event) => this.sort('id')}>
                名前
              </Table.HeaderCell>
              <Table.HeaderCell sorted={column === 'month_start' ? direction : null} onClick={(event) => this.sort('lastName')}>
                期間
              </Table.HeaderCell>
              <Table.HeaderCell disabled/>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {
              objectives.map(objective => {
                const id = objective.get('id');
                const name = objective.get('name');
                const monthStart = objective.get('okrPeriod').get('monthStart');
                const monthEnd = objective.get('okrPeriod').get('monthEnd');
                return (
                  <Table.Row key={id}>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                      <Form>
                        <Form.Group>
                          <Form.Field>
                            〜
                          </Form.Field>
                        </Form.Group>
                      </Form>
                    </Table.Cell>
                    <Table.Cell textAlign="center">
                      <Button icon="trash" onClick={console.log} title="削除" negative/>
                    </Table.Cell>
                  </Table.Row>
                );
              })
            }
          </Table.Body>
        </Table>
      </Tab.Pane>
    );
  }
}

OkrPeriodSettingTab.propTypes = {
  loginUser: PropTypes.object,
  objectives: PropTypes.object,
  fetchObjectives: PropTypes.func,
  addObjective: PropTypes.func,
  updateObjective: PropTypes.func,
  removeObjective: PropTypes.func,
};

export default OkrPeriodSettingTab;
