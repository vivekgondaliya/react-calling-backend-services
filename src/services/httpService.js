import axios from "axios";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.state >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    //log the error for DEVs
    console.log("Logging the error: ", error);
    alert("An unexpected error occurred.");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delelte: axios.delete
};
