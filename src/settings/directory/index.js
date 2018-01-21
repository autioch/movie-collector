import electron from 'electron';
import React, { Component } from 'react';
import { Input } from 'antd';
import settings from 'electron-settings';

const { dialog } = electron.remote;

export default class DirectorySetting extends Component {
  constructor(props) {
    super(props);
    this.setDirectory = this.setDirectory.bind(this);
    this.chooseDirectory = this.chooseDirectory.bind(this);
    this.state = {
      directory: settings.get(props.settingsKey, props.defaultValue)
    };
  }

  setDirectory(directories = []) {
    if (directories.length) {
      this.setState({
        directory: directories[0]
      });
    }
  }

  chooseDirectory() {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, this.setDirectory);
  }

  componentWillUpdate(nextProps, nextState) { // eslint-disable-line no-unused-vars
    settings.set(this.props.settingsKey, nextState.directory, {
      prettify: true
    });
  }

  render() {
    return (
      <div>
        <div>Choose {this.props.label} directory</div>
        <Input onClick={this.chooseDirectory} value={this.state.directory} readOnly />
      </div>
    );
  }
}
