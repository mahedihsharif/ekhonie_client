import axios from "axios";
import httpRequest from "../../httpRequest";

export const getCategories = async () => {
  const res = await axios.get(`${httpRequest.url}/categories?populate=*`);
  return res;
};

export const getProducts = async () => {
  const res = await axios.get(`${httpRequest.url}/products?populate=*`);
  return res;
};

export const getBlogs = async () => {
  const res = await axios.get(`${httpRequest.url}/blogs?populate=*`);
  return res;
};
