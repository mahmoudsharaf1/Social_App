import axios, { Method } from "axios";
// import {store} from '../redux/store';
const baseUrl = "";
const axiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

export const GOOGLE_MAPS_APIKEY = "AIzaSyBbnsbICuKYkeX9NnyhHvM_ClE8o_IWWFg";

// response interceptors
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    return Promise.reject(error);
  }
);

const Axios = async (
  method: Method,
  path: string,
  data?: any,
  params?: any,
  // contentType?: any,
  headers?: any
) => {
  const response = await axiosInstance({
    method: method,
    url: path,
    params: params,
    data: data,
    headers: {
      // 'Content-Type': contentType ? contentType : 'application/json',
      // Authorization: `Bearer ${customerAccessToken}`,
      ...headers,
    },
  });
  return response;
};

export default Axios;
