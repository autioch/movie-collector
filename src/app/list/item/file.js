import React from 'react';
import { Icon } from 'antd';
import { CATEGORIES } from '../../../tools/findVideos/parseFile/categorize/fileTypes';

const style = {
  fontSize: '16px'
};

const ICONS = {
  [CATEGORIES.VIDEO]: <Icon type="video-camera" theme="twoTone" twoToneColor="#6c6" style={style} />,
  [CATEGORIES.SUBTITLE]: <Icon type="file-text" theme="twoTone" twoToneColor="#66c" style={style} />,
  [CATEGORIES.IGNORED]: <Icon type="file" theme="twoTone" twoToneColor="#bbb" style={style} />,
  [CATEGORIES.SPAM]: <Icon type="file-exclamation" theme="twoTone" twoToneColor="#c66" style={style} />,
  [CATEGORIES.UNKNOWN]: <Icon type="file-unknown" theme="twoTone" twoToneColor="#fc6" />
};

export default ({ item }) => {
  const { file: { title, ext } } = item;
  const icon = ICONS[item.category];

  return (
    <div className="list-item video">
      {icon}
      <div className="list-item__header">{title}.{ext}</div>
    </div>
  );
};
