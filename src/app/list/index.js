/* eslint-disable max-len */
import React from 'react';
import Item from './item';
import './styles.css';

import { AutoSizer, List } from 'react-virtualized';

const FOLDER_HEIGHT = 30;
const VIDEO_HEIGHT = 30;

export default ({ videoList }) => (
  <div className="list">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={videoList.length}
          rowHeight={({ index }) => videoList[index].isFile ? VIDEO_HEIGHT : FOLDER_HEIGHT } // eslint-disable-line no-confusing-arrow
          rowRenderer={
            ({ index, style }) =>
              <Item
                style={style}
                key={index}
                item={videoList[index]}
              />
          }
        />
      )}
    </AutoSizer>
  </div>
);
