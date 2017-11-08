import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Icon, Segment, Accordion } from 'semantic-ui-react';
import EditableText from './utils/EditableText';

class KeyResultAccordionItem extends Component {
  constructor(props) {
    super(props);
    this.state = { progressRate: props.keyResult.get('progressRate') };
  }

  handleSliderChange(event) {
    this.setState({ progressRate: event.target.value });
  }

  handleSliderUnFocus(event) {
    this.updateKeyResult({ progressRate: Number(event.target.value) });
  }

  updateKeyResult(values) {
    this.props.updateKeyResult({ id: this.props.keyResult.get('id'), ...values });
  }

  render() {
    const keyResult = this.props.keyResult;
    return (
      <Segment>
          <Accordion.Title className='flex flex-between' active={this.props.active} index={this.props.index} onClick={this.props.onClick}>
            <div><Icon />{keyResult.get('name')}</div>
            <div className='progress-ratio'>{this.state.progressRate}%</div>
          </Accordion.Title>
          <Accordion.Content active={this.props.active}>
            <Form.Group widths='equal'>
              <Form.Field>
                <label>進捗: <span className='progress-rate'>{this.state.progressRate}%</span></label>
                <div className='slider'>
                  <input type='range' min='0' max='100' value={this.state.progressRate} onChange={this.handleSliderChange.bind(this)} step='1'
                         data-unit='%' onBlur={this.handleSliderUnFocus.bind(this)}/>
                </div>
              </Form.Field>
              <Form.Field className='values'>
                <div>
                  <label>目標数値: </label>
                  <EditableText value={`${keyResult.get('targetValue')}`} saveValue={(value) => this.updateKeyResult({ targetValue: value })}>
                    {keyResult.get('valueUnit')}
                  </EditableText>
                </div>
                <div>実績数値: <span>{keyResult.get('actualValue')}{keyResult.get('valueUnit')}</span></div>
              </Form.Field>
            </Form.Group>
          </Accordion.Content>
      </Segment>
    );
  }
}

KeyResultAccordionItem.propTypes = {
  keyResult: PropTypes.object,
  updateKeyResult: PropTypes.func
};

KeyResultAccordionItem.defaultProps = {
  keyResult: null,
  updateKeyResult: () => {}
};

export default KeyResultAccordionItem;
