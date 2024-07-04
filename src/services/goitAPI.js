import axios from "axios";

export const goitAPI = axios.create({
  baseURL: "https://connections-api.goit.global/",
});

export const setUserToken = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearUserToken = () => {
  goitAPI.defaults.headers.common.Authorization = "";
};
