import React, { Component } from 'react';
import TagGroup from './tagGroup';
import Switch from './switch';
import Directory from './directory';
import { Divider } from 'antd';

export default class SettingsComponent extends Component {
  render() {
    return (
      <div>
        <Divider>Input</Divider>
        <Directory label="input" settingsKey="inputDirectory" defaultValue={''}/>
        <Divider>Data collection</Divider>
        <Switch label="Scan file with ffmpeg for info" settingsKey="ffmpeg" defaultValue={false}/>
        <Switch label="Force ffmpeg for all files" settingsKey="ffmpegForce" defaultValue={false}/>
        <Switch label="Query omdb for info" settingsKey="omdb" defaultValue={false}/>
        <Switch label="Force omdb for all files" settingsKey="omdbForce" defaultValue={false}/>
        <Switch label="Query napiProject for info" settingsKey="napiProject" defaultValue={false}/>
        <Switch label="Force napiProject for all files" settingsKey="napiProjectForce" defaultValue={false}/>
        <Switch label="Suggest renames" settingsKey="suggestRenames" defaultValue={false}/>
        <Divider>File types</Divider>
        <TagGroup label="Acceptable video files" settingsKey="videoFormats" defaultValue={['avi', 'mp4', 'mkv', 'm4v']}/>
        <TagGroup label="Acceptable subtitle files" settingsKey="subtitleFormats" defaultValue={['srt', 'txt', 'sub', 'idx']} />
        <TagGroup label="Ignored files" settingsKey="ignoredFormats" defaultValue={['jpg', 'bmp', 'png']}/>
        <Divider>Output</Divider>
        <Directory label="output" settingsKey="outputDirectory" defaultValue={''}/>
        <Switch label="Cleanup folder" settingsKey="cleanupFolder" defaultValue={false}/>
        <Switch label="Minify all outputted files" settingsKey="minify" defaultValue={false}/>
        <Switch label="Report all unknown files" settingsKey="reportUnknownFiles" defaultValue={false}/>
        <Switch label="Report all errors" settingsKey="reportErrors" defaultValue={false}/>
        <Switch label="Output statistics" settingsKey="outputStatistics" defaultValue={false}/>
        <Switch label="Output list" settingsKey="outputList" defaultValue={false}/>
        <Switch label="Output raw data" settingsKey="outputRawData" defaultValue={false}/>
      </div>
    );
  }
}
