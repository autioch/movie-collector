import React, { Component } from 'react';
import { Checkbox } from 'antd';
import settings from 'electron-settings';

export default class SettingsCheckbox extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.state = {
      checked: settings.get(props.settingsKey, props.defaultValue)
    };
  }

  toggleState(ev) {
    this.setState({
      checked: !ev.target.checked
    });
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    settings.set(this.props.settingsKey, nextState.checked);
  }

  render() {
    return (
      <Checkbox onChange={this.toggleState} value={this.state.checked} >{this.props.label}</Checkbox>
    );
  }
}
