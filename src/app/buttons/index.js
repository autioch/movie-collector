import React from 'react';
import { Button } from 'antd';
import './styles.scss';

export default function Buttons({ store }) {
  return (
    <div className="buttons">
      <Button onClick={store.findVideos}>Find videos</Button>
    </div>
  );
}
