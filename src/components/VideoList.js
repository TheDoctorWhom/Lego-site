  import React from 'react';
  import VideoItem from './VideoItem';
  import './VideoList.css'


  const rendered = (renderedList) => {
    return(
        <div className="ui padded five column grid">{ renderedList }</div>
      );
  }


  const VideoList = ({ videos, onVideoSelect, term }) => {
    const renderedList = videos.map((video) => {
      return <VideoItem  key={video.NUMBER} onVideoSelect={onVideoSelect} video= {video}/>;
    });
    return rendered(renderedList)
  };

export default VideoList;
