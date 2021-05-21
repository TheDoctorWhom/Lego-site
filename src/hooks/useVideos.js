import {useState, useEffect} from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect (() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

const search = async (term, service, series, language) => {
  const response = await youtube.get('',{
    }); // end of response
    // console.log(response.data.CATALOG.LEGO);
    setVideos(response.data.CATALOG.LEGO);

  }; // end of search

  return [videos, search];
};

export default useVideos;
