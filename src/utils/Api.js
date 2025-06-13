import axios from "axios";

const Api = axios.create({
  baseURL: "http://rest-api.test/api/",
});

export default Api;
