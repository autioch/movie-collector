import React from 'react';
import { Button, Switch } from 'antd';
import { CATEGORIES } from '../../tools/categorize/fileTypes';
import './styles.scss';

const plural = (noun, count) => noun + (count > 1 ? 's' : '');

export default function Buttons({ store, state }) {
  const { showOnlyRenames, ignoreCamelCase, videoList } = state;
  const folderCount = videoList.filter((item) => item.category === CATEGORIES.FOLDER).length;
  const fileCount = videoList.length - folderCount;

  return (
    <div className="buttons">
      <div className="buttons-item">
        <Button onClick={store.findVideos}>Find videos</Button>
      </div>
      <label className="buttons-item">
        <Switch
          onChange={() => store.toggleShowOnlyRenames().setVideoList()}
          value={showOnlyRenames}
          size="small"
        />
        <span className="buttons-item__label"> Show only renames</span>
      </label>
      <label className="buttons-item">
        <Switch
          onChange={() => store.toggleIgnoreCamelCase().setVideoList()}
          value={ignoreCamelCase}
          size="small"
        />
        <span className="buttons-item__label"> Ignore camel case</span>
      </label>
      <div className="buttons-item">
        <span>{fileCount} {plural('file', fileCount)}, {folderCount} {plural('folder', fileCount)}</span>
      </div>
    </div>
  );
}
