import axios from "axios";
import httpRequest from "../../httpRequest";

export const getCategories = async () => {
  const res = await axios.get(`${httpRequest.url}/categories`);
  const data = res.data;
  return data;
};

export const getProducts = async () => {
  const res = await axios.get(`${httpRequest.url}/products`);
  const data = res.data;
  return data;
};

export const getBlogs = async () => {
  const res = await axios.get(`${httpRequest.url}/blogs`);
  const data = res.data;
  return data;
};

export const createUser = async (userInfo) => {
  const res = await axios.post(`${httpRequest.url}/auth/register`, userInfo);
  const data = res.data;
  return data;
};

export const loginUser = async (userInfo) => {
  const res = await axios.post(`${httpRequest.url}/auth/login`, userInfo);
  const data = res.data;
  return data;
};

export const createOrders = async (cartItems, token) => {
  const res = await axios.post(
    `${httpRequest.url}/payment/create-checkout-session`,
    { cartItems },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;
  return data;
};
