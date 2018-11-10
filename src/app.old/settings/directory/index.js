import React from 'react';
import { Input } from 'antd';

import './styles.scss';

export default ({ id, value, label, choosePath }) => (
  <label className="settings-item settings-directory">
    <span className="settings-directory__label" onClick={() => choosePath(id)}>{label}</span>
    <Input onClick={() => choosePath(id)} value={value} placeholder="Choose folder..." readOnly />
  </label>
);
