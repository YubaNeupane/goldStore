import axios from "axios";
const api = axios.create();
export const getGoldPrice = () =>
  api.get(
    "https://forex-data-feed.swissquote.com/public-quotes/bboquotes/instrument/XAU/USD"
  );
export const getProductDetails = () =>
  api.get("https://limitless-crag-92839.herokuapp.com/product");
