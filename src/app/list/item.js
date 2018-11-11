import React from 'react';
import { Icon } from 'antd';
import Suggestion from './suggestion';
import { CATEGORIES } from '../../tools/categorize/fileTypes';

const iconStyle = {
  fontSize: '20px'
};

const ICON_COLOR = {
  [CATEGORIES.VIDEO]: '#6c6',
  [CATEGORIES.SUBTITLE]: '#66c',
  [CATEGORIES.IGNORED]: '#bbb',
  [CATEGORIES.SPAM]: '#c66',
  [CATEGORIES.UNKNOWN]: '#fc6',
  [CATEGORIES.FOLDER]: '#bbb'
};

const PADDING = 22; // icon, padding, margin

function getHeader(item) {
  if (item.category === CATEGORIES.FOLDER) {
    return item.itemName;
  }

  return item.file.title;
}

function getIcon(item) {
  const { category } = item;
  const color = ICON_COLOR[category];

  if (category === CATEGORIES.FOLDER) {
    return <Icon type="folder" theme="twoTone" twoToneColor={color} style={iconStyle} />;
  }

  return <div className="item-icon--text" style={{
    color
  }}>{item.file.ext}</div>;
}

export default ({ item, style, store, ignoreCamelCase }) => {
  const header = getHeader(item);
  const icon = getIcon(item);

  return (
    <div style={{
      ...style,
      paddingLeft: item.depth * PADDING
    }}>
      <div className="item-wrapper">
        <div className="item-row">
          <div className="item-icon">{icon}</div>
          <div className="item-header">{header}</div>
        </div>
        <div className="item-row">
          <div className="item-icon"></div>
          <Suggestion
            itemId={item.id}
            original={header}
            suggestion={item.suggestion.fullName}
            ignoreCamelCase={ignoreCamelCase}
            onChange={store.setFullNameSuggestion}
            renameFile={store.renameFile}
          />
        </div>
      </div>
    </div>
  );
};
