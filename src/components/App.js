

import React, { useState } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import PeiceCount from './peicecount';
// import VideoDetail from './VideoDetail';
import useVideos from '../hooks/useVideos';
import Chart from './Chart';
// import LoadingBar from './LoadingBar';

const App = () => {


  // const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos('');
  const [isActive, setActive] = useState('');


  const handleToggle = () => {
    setActive(!isActive);
  };

  // useEffect(() => {
  //   setSelectedVideo(videos[0]);
  // }, [videos]);

  // setSelectedVideo(response.data.items[0]);



  //  const onVideoSelect = (video) => {
  //   setSelectedVideo(video);

  // }; // end of onVideoSelect

return (
  <div className="ui container">
    <h1>Lego Inventory</h1>
    <SearchBar onFormSubmit={search}/>
    <PeiceCount videos={videos}/>
    <button className="btn btn-default ui" onClick={handleToggle}>Chart</button>
    { isActive ? <Chart videos={videos} term={search}/> : null }
    <VideoList
      // onVideoSelect={setSelectedVideo}
      videos={videos}
      term={search}
    />
  </div>
 );
}; // end of App


export default App;
