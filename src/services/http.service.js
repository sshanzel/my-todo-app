import axios from "axios";

export const baseUrl =
  process.env.NODE_ENV === "development"
    ? `https://jvzgrc51ve.execute-api.us-east-2.amazonaws.com/dev/api`
    : `https://localhost:3001/api`;

axios.defaults.baseURL = baseUrl;

axios.interceptors.response.use(
  success => {
    return Promise.resolve(success);
  },
  error => {
    const expectedError =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    // soon implement a logger service
    if (!expectedError) {
      console.log("Logging the error", error);
    }

    return Promise.reject(error);
  }
);

function setJwtHeaderAuth(jwt) {
  axios.defaults.headers.common["X-Api-Key"] = jwt;
}

export default {
  get: axios.get,
  post: axios.post,
  patch: axios.patch,
  put: axios.put,
  delete: axios.delete,
  setJwtHeaderAuth
};
