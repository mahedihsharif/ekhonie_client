import axios from "axios";
import httpRequest from "../../httpRequest";

export const getCategories = async () => {
  const res = await axios.get(`${httpRequest.url}/categories?populate=*`);
  const data = res?.data?.data;
  return data;
};

export const getProducts = async () => {
  const res = await axios.get(`${httpRequest.url}/products?populate=*`);
  const data = res?.data?.data;
  return data;
};

export const getBlogs = async () => {
  const res = await axios.get(`${httpRequest.url}/blogs?populate=*`);
  const data = res?.data?.data;
  return data;
};
