import React, { Component } from 'react';
import { Switch } from 'antd';
import settings from 'electron-settings';

export default class SettingsCheckbox extends Component {
  constructor(props) {
    super(props);
    this.toggleState = this.toggleState.bind(this);
    this.toggleStateFromLabel = this.toggleStateFromLabel.bind(this);
    this.state = {
      checked: settings.get(props.settingsKey, props.defaultValue)
    };
  }

  toggleState(checked) {
    this.setState({
      checked
    });
  }

  toggleStateFromLabel(ev) {
    ev.persist();
    this.setState({
      checked: !this.state.checked
    });
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    settings.set(this.props.settingsKey, nextState.checked, {
      prettify: true
    });
  }

  render() {
    return (
      <div>
        <Switch onChange={this.toggleState} checked={this.state.checked} />
        <span onClick={this.toggleStateFromLabel}>{this.props.label}</span>
      </div>
    );
  }
}
