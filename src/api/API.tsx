import axios from "axios";

export const httpSignal = axios.CancelToken.source();

const logOutUser = () => {
  return (window.location.href = "");
};

const CancelToken = axios.CancelToken;
let requestSignal;

const config = {
  apiGateway: {
    BASE_URL: "https://generatead-backend.vercel.app/api/v1",
    // BASE_URL: process.env.REACT_APP_DEV_API_BASE_URL,
  },
};

const { BASE_URL } = config.apiGateway;

const API = axios.create({
  baseURL: BASE_URL,
});

API.interceptors.request.use(
  (config: any) => {
    // const accessToken = getAuthToken();
    // accessToken && (config.headers!.Authorization = "Bearer " + accessToken);
    requestSignal = CancelToken.source();
    config.cancelToken = requestSignal.token;
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  }
);

API.interceptors.response.use(
  async (response: any) => {
    return response;
  },
  async (error: any) => {
    const status = error?.response?.status;
    if (status === 401) {
      sessionStorage.clear();
      logOutUser();
      return Promise.reject(error);
    }

    return Promise.reject(error);
  }
);

export default API;
