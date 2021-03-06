
import './VideoItem.css'
import React from 'react';

const VideoItem = ({ video, onVideoSelect, term }) => {

  return (

      <div className="ui four wide column ">
        <div className="ui segment result">
          <h4 className="ui header">{`${video.TITLE} ${video.BUILT ? '🧱':''}`}</h4>
          <p>{video.NUMBER}</p>
          <div className="ui image">
          <img src={`https://img.bricklink.com/ItemImage/SN/0/${video.NUMBER}-1.png`} alt={video.TITLE}/>
        </div>
        </div>
      </div>

  );
};

export default VideoItem;
