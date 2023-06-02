import axios from "axios";
import axiosClient from "./axiosClient";

const getAccessToken = () => localStorage.getItem("accessToken");

const authApi = {
    login: (params) => axiosClient.post("auth/login", params),
    register: (params) =>
        axios.post(process.env.REACT_APP_API_URL + "/auth/register", params),
};

export default authApi;
