import axios from "axios";

export const getCurrentUser = (handle) => {
  return axios.get(`/api/current`);
};

export const getLeaderboard = () => {
  return axios.get(`/api/users/leaderboard`);
};

export const getUsers = () => {
  return axios.get('/api/users/')
}