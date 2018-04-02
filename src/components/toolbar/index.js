import React from 'react';
import { Input } from 'antd';
import './styles.scss';

export default ({ inputPath, chooseInputPath }) => (
  <div className="settings">
    <Input onClick={chooseInputPath} value={inputPath} placeholder="Choose folder..." readOnly />
  </div>
);
