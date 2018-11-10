/* eslint-disable max-len */
import React from 'react';
import Item from './item';
import './styles.css';

import { AutoSizer, List } from 'react-virtualized';

const FOLDER_HEIGHT = 27;
const VIDEO_HEIGHT = 50;

export default ({ videos, settingValues }) => (
  <div className="list">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={videos.length}
          rowHeight={({ index }) => videos[index].isFile ? VIDEO_HEIGHT : FOLDER_HEIGHT } // eslint-disable-line no-confusing-arrow
          rowRenderer={
            ({ index, style }) =>
              <Item
                style={style}
                key={index}
                settingValues={settingValues}
                item={videos[index]}
              />
          }
        />
      )}
    </AutoSizer>
  </div>
);
