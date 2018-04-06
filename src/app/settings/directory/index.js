import React from 'react';
import { Input } from 'antd';

export default ({ id, value, label, choosePath }) => (
  <div>
    <span onClick={() => choosePath(id)}>{label}</span>
    <Input onClick={() => choosePath(id)} value={value} placeholder="Choose folder..." readOnly />
  </div>
);
