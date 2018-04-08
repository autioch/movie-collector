import React from 'react';
import Item from './item';
import './styles.css';

import { AutoSizer, List } from 'react-virtualized';

export default ({ videos, setTitleSuggestion, setYearSuggestion }) => (
  <div className="list">

    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          width={width}
          rowCount={videos.length}
          rowHeight={63}
          rowRenderer={
            ({ index, style }) =>
              <Item
                style={style}
                key={index}
                video={videos[index]}
                setTitleSuggestion={setTitleSuggestion}
                setYearSuggestion={setYearSuggestion}
              />
          }
        />
      )}
    </AutoSizer>

  </div>
);
