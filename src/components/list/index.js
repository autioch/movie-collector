import React from 'react';
import Item from './item';
import './styles.css';

export default ({ videos, setTitleSuggestion, setYearSuggestion }) => (
  <div className="list">
    {videos.map((video, index) => <Item
      key={index}
      video={video}
      setTitleSuggestion={setTitleSuggestion}
      setYearSuggestion={setYearSuggestion}
    />)}
  </div>
);
