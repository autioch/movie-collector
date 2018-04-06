import React from 'react';
import { Button } from 'antd';

export default ({ store, state: { buttons } }) => (
  <div className="buttons">
    {buttons.map((button) => <Button key={button.id} onClick={store[button.id]}>{button.label}</Button>)}
  </div>
);
