import axios from "axios";
const api = axios.create();
export const getGoldPrice = () => api.get("https://mocki.io/v1/966e587b-0cf8-4b64-8fdf-b8fc96ea00fe");
export const getProductDetails = () => api.get("https://limitless-crag-92839.herokuapp.com/product");