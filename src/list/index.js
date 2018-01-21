import React from 'react';
import Item from './item';
import './styles.css';

export default ({ videos }) => (
  <table className="list">
    <tbody>
      {videos.map((video, index) => <Item video={video} key={index}/>)}
    </tbody>
  </table>
);
