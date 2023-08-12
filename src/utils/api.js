import axios from "axios";

const instance = axios.create({
  baseURL: "https://dummyjson.com",
});

export const fetchProducts = async () => {
  try {
    const response = await instance.get("/products");
    return response.data;
  } catch (error) {
    throw error;
  }
};
