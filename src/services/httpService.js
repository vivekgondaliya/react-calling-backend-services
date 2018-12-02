/**
 * IMP: If we decide to use any other library other than AXIOS,
 * we only have to modify changes here
 */
import axios from "axios";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.state >= 400 &&
    error.response.status <= 500;

  if (!expectedError) {
    //log the error for DEVs
    console.log("Logging the error: ", error);
    toast.error("An unexpected error occurred."); // can also use toast() only
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
