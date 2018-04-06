import React from 'react';
import { Switch } from 'antd';

import './styles.scss';

export default ({ id, value, label, toggleValue }) => (
  <div className="settings-item settings-switch">
    <Switch onChange={() => toggleValue(id)} checked={value} />
    <span className="settings-switch__label" onClick={() => toggleValue(id)}>{label}</span>
  </div>
);
