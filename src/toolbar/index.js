import electron from 'electron';
import React, { Component } from 'react';
import { Input } from 'antd';
import './styles.scss';

const { dialog } = electron.remote;

export default class SettingsComponent extends Component {
  constructor(props) {
    super(props);

    this.setDirectory = this.setDirectory.bind(this);
    this.chooseDirectory = this.chooseDirectory.bind(this);
  }

  setDirectory(directories = []) {
    if (directories.length) {
      this.props.setInputPath(directories[0]);
    }
  }

  chooseDirectory() {
    dialog.showOpenDialog({
      properties: ['openDirectory']
    }, this.setDirectory);
  }

  render() {
    return (
      <div className="settings">
        <Input onClick={this.chooseDirectory} value={this.props.inputPath} readOnly />

      </div>
    );
  }
}
