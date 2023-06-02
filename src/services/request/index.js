import axios from "axios";

class SpRequest {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    // 请求拦截
    this.instance.interceptors.request.use(
      (config) => {
        // const token=localStorage.getItem("token")
        // if (token) {
        //   state
        // }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // 响应拦截
    this.instance.interceptors.response.use(
      (res) => {
        return res.data;
      },
      (error) => {
        if (error.response.status === 400) {
          window.location = "/login";
        }
        return Promise.reject(error);
      }
    );
  }

  get(config) {
    return this.instance.request({ ...config, method: "GET" });
  }
  post(config) {
    return this.instance.request({ ...config, method: "POST" });
  }
}

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const TIMEOUT = process.env.REACT_APP_API_TIME_OUT;

const sqRequest = new SpRequest(BASE_URL, TIMEOUT);

export default sqRequest;
