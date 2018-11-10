import React from 'react';
import { Spin, Icon } from 'antd';
import './styles.scss';

const antIcon = <Icon spin type="loading" style={{
  fontSize: 72
}} />;

export default () => (
  <div className="loader__container">
    <Spin indicator={antIcon} tip="Scanning directory for videos..."/>
  </div>
);
