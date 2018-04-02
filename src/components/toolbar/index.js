import React from 'react';
import { Input, Switch } from 'antd';
import './styles.scss';

export default ({ inputPath, chooseInputPath, toggleShowOnlyProblems, showOnlyProblems, videosVisibleCount, videosCount }) => (
  <div>
    <div className="input-info">
      <Input onClick={chooseInputPath} value={inputPath} placeholder="Choose folder..." readOnly />
      <span className="input-info__count">{videosVisibleCount} / {videosCount}</span>
    </div>
    <div className="settings__list">
      <span className="settings-switch">
        <Switch onChange={toggleShowOnlyProblems} checked={showOnlyProblems} />
        <span className="settings-switch__label" onClick={toggleShowOnlyProblems}>Show only problems</span>
      </span>
    </div>
  </div>
);
