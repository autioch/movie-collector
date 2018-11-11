/* eslint-disable max-len */
import React from 'react';
import Item from './item';
import { AutoSizer, List } from 'react-virtualized';
import './styles.css';

const ITEM_ROW_COUNT = 2;
const ITEM_ROW_HEIGHT = 24;
const ITEM_MARGIN = 2 * 2;
const ITEM_HEIGHT = (ITEM_ROW_COUNT * ITEM_ROW_HEIGHT) + ITEM_MARGIN;

export default ({ videoList }) => (
  <div className="list">
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={videoList.length}
          rowHeight={ITEM_HEIGHT}
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
