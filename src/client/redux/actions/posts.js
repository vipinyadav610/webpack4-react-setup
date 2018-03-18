import axios from "axios";
import { GET_POSTS } from "../constants";

export const getApiData = () => {
  return {
    type: GET_POSTS,
    promise: axios.get("https://jsonplaceholder.typicode.com/posts")
  };
};
