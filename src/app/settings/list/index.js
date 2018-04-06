import React from 'react';
import { Tag } from 'antd';

export default ({ id, value, label, removeItem }) => (
  <div>
    <span>{label}</span>
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
