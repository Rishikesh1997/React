import axios from "axios";

const BASE_URL = "http://localhost:8080";

export const getAdminList = () => {
  return axios.get(BASE_URL + "/admin/list");
};

export const getAdminById = (adminId) => {
  return axios.get(BASE_URL + "/admin/get/" + adminId);
};
