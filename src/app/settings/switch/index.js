import React from 'react';
import { Switch } from 'antd';

export default ({ id, value, label, toggleValue }) => (
  <div>
    <Switch onChange={() => toggleValue(id)} checked={value} />
    <span onClick={() => toggleValue(id)}>{label}</span>
  </div>
);
