import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';

const App = () => {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('new york');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  // setSelectedVideo(response.data.items[0]);



   const onVideoSelect = (video) => {
    setSelectedVideo(video);

  }; // end of onVideoSelect

return (
  <div className="ui container">
    <SearchBar onFormSubmit={search}/>
    <div className="ui grid">
      <div className="ui row">
        <div className="five wide column">
          <VideoList
            onVideoSelect={setSelectedVideo}
            videos={videos}
            term={search}
          />
        </div>
      </div>
    </div>
   </div>
 );
}; // end of App


export default App;
