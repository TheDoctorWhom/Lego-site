import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect, term }) => {

  return (
    <div>

      <div className="ui segment">
        <h4 className="ui header">{video.TITLE}</h4>
        <p>{video.NUMBER}</p>
        <div className="ui image">
          <img src={`https://img.bricklink.com/ItemImage/SN/0/${video.NUMBER}-1.png`}/>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
