/* eslint-disable max-len */
import React from 'react';
import Switch from '../switch';
import List from '../list';
import Directory from '../directory';

import TYPES from '../types';

export default ({ state: { settings, settingValues }, store }) => (
  <div className="settings-content">
    {settings
      .filter((setting) => setting.isFavorite)
      .map((setting) => {
        if (setting.type === TYPES.BOOLEAN) {
          return <Switch key={setting.id} id={setting.id} value={settingValues[setting.id]} label={setting.label} toggleValue={store.toggleValue}/>;
        }
        if (setting.type === TYPES.LIST) {
          return <List key={setting.id} id={setting.id} value={settingValues[setting.id]} label={setting.label} removeItem={store.removeItem}/>;
        }
        if (setting.type === TYPES.DIRECTORY) {
          return <Directory key={setting.id} id={setting.id} value={settingValues[setting.id]} label={setting.label} choosePath={store.choosePath}/>;
        }

        return <div>{JSON.stringify(setting)}</div>;
      })}
  </div>
);
