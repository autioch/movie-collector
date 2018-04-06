/* eslint-disable max-len */
import React from 'react';
import Switch from './switch';
import List from './list';
import Directory from './directory';
import './styles.scss';

import CATEGORIES from './categories';
import TYPES from './types';

const CATEGORIES_LIST = Object.values(CATEGORIES).sort((catA, catB) => catA.order > catB.order);

export default ({ state: { settings, settingValues }, store }) => (
  <div>
    {CATEGORIES_LIST.map((category) =>
      <div key={category.id} >
        <div>{category.label}</div>
        {settings
          .filter((setting) => setting.category === category.id)
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
    )}
  </div>
);
