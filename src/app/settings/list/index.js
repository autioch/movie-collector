import React from 'react';
import { Tag } from 'antd';

import './styles.scss';

export default ({ id, value, label, removeItem }) => (
  <div className="settings-item settings-list">
    <span className="settings-list__label">{label}</span>
    {value.map((item) =>
      <Tag
        key={item}
        closable={true}
        afterClose={() => removeItem({
          id,
          item
        })}
      >
        {item}
      </Tag>
    )}
  </div>
);
