import { Tabs } from 'antd';
import React from 'react';
import Settings from '../settings';
import List from '../list';

const TabPane = Tabs.TabPane;

export default ({ videos }) => (
  <Tabs defaultActiveKey="settings" animated={false}>
    <TabPane tab="Settings" key="settings">
      <Settings />
    </TabPane>
    <TabPane tab="List" key="list">
      <List videos={videos}/>
    </TabPane>
  </Tabs>
);
