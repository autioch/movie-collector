/* eslint-disable max-len*/
import React from 'react';
import VideoComponent from './video';
import FolderComponent from './folder';

export default ({ item, style, settingValues }) => {
  const Component = item.isFile ? VideoComponent : item.isDirectory ? FolderComponent : undefined; // eslint-disable-line no-nested-ternary

  return (
    <div style={{
      ...style,
      paddingLeft: item.depth * 20
    }}>
      { Component ? <Component item={item} settingValues={settingValues} /> : <div>{JSON.stringify(item)}</div> }
    </div>
  );
};
