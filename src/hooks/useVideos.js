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
      const reducedResponse = {};

    var x;
    for (x in response.data.CATALOG.LEGO){
      if(!response.data.CATALOG.LEGO[x].TITLE.toLowerCase().includes(term.toLowerCase())){
        // console.log(response.data.CATALOG.LEGO[x]);
        delete response.data.CATALOG.LEGO[x];
      }
    }
    setVideos(response.data.CATALOG.LEGO);

  }; // end of search

  return [videos, search];
};

export default useVideos;
