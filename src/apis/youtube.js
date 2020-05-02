import axios from "axios";

const KEY = 'AIzaSyAmoxeJZd1Sa1xIZ4Z0LbvszQPtj4kH0uM';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY
  }
});
