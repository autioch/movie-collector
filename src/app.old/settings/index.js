/* eslint-disable max-len */
import React from 'react';
import All from './all';
import Favorite from './favorite';
import { Icon } from 'antd';
import './styles.scss';

export default ({ state, state: { settingsExpanded }, store }) => {
  const SettingsComponent = settingsExpanded ? All : Favorite;

  return (
    <div className="settings">
      <SettingsComponent state={state} store={store} />
      <div className="settings-toggle" onClick={store.toggleSettingsExpanded} >
        <Icon type="setting"/>
      </div>
    </div>
  );
};
