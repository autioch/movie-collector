import React from 'react';
import { Input } from 'antd';

import './styles.scss';

export default function Settings({ store, state: { inputDirectory } }) {
  return (
    <div>
      <label className="settings-item settings-directory">
        <span className="settings-directory__label" onClick={store.choosePath}>Input directory</span>
        <Input onClick={store.choosePath} value={inputDirectory} placeholder="Choose folder..." readOnly />
      </label>
    </div>
  );
}
