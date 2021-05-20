import axios from 'axios';

const KEY = 'AIzaSyALYOXPg6SOjFAw26aF3TN8kIvGH2BxDt4'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params:{
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});
