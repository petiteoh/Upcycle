import axios from "axios";

export const getCurrentUser = (handle) => {
      return axios.get(`/api/current`);
}