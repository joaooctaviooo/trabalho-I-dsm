import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://hn.algolia.com/api"
});