import React from 'react';
import Item from './item';
import './styles.css';

export default ({ videos }) => (
  <div className="list">
    <table className="list__table">
      <tbody>
        {videos.map((video, index) => <Item video={video} key={index}/>)}
      </tbody>
    </table>
  </div>
);
