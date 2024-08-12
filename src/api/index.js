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

export const createAccount = async (userInfo) => {
  const res = await axios.post(
    `${httpRequest.url}/auth/local/register`,
    userInfo
  );
  const data = res.data;
  return data;
};

export const loginAccount = async (userInfo) => {
  const res = await axios.post(`${httpRequest.url}/auth/local`, userInfo);
  const data = res.data;
  return data;
};
