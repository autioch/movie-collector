import React from 'react';
import { Icon } from 'antd';
import { join } from 'path';

const style = {
  fontSize: '16px'
};

export default ({ item }) => (
  <div className="list-item folder">
    <Icon type="folder" theme="twoTone" twoToneColor="#bbb" style={style} />
    <div className="list-item__header">{ join(item.folderPath, item.itemName) }</div>
  </div>
);
