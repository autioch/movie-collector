/* eslint-disable max-len*/
import React from 'react';
import Fileomponent from './file';
import FolderComponent from './folder';

const PADDING = 30;

export default ({ item, style, settingValues }) => {
  const Component = item.isFile ? Fileomponent : item.isDirectory ? FolderComponent : undefined; // eslint-disable-line no-nested-ternary

  return (
    <div style={{
      ...style,
      paddingLeft: item.depth * PADDING
    }}>
      { Component ? <Component item={item} settingValues={settingValues} /> : <div>{JSON.stringify(item)}</div> }
    </div>
  );
};
