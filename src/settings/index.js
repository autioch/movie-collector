import React, { Component } from 'react';
import TagGroup from './tagGroup';
import Checkbox from './checkbox';

export default class SettingsComponent extends Component {
  render() {
    return (
      <div>
        <Checkbox label="Prepare folders" settingsKey="prepareFolders" defaultValue={true}/>
        <TagGroup label="video format" settingsKey="videoFormats" defaultValue={['avi', 'mp4', 'mkv', 'm4v']}/>
        <TagGroup label="subtitle format" settingsKey="subtitleFormats" defaultValue={['srt', 'txt', 'sub', 'idx']} />
        <TagGroup label="ignored format" settingsKey="ignoredFormats" defaultValue={['jpg', 'bmp', 'png']}/>
      </div>
    );
  }
}
