import axios from "axios";

const KEY = "AIzaSyASecgjce7aB-EKVx2gPdn6ejeInVUmsaI";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",

  params: {
    part: "snippet",
    maxResults: 25,
    key: KEY,
  },
});
