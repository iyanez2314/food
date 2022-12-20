import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer 1WLacfoR7X5GILafm4qxGCIYLppOPMEBgIu773f04c8Du47mOFecvdkI3BQI0X3rGyELLOwTMwUhboSteenz0EKlu3-hxqGATbhcl1F1jHR9V8QyARcqauxDZqagY3Yx`,
  },
});
