import axios from "axios";

export const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

export const getPosts = () => {
debugger
  return axios.get("/api/posts");
};

export const getUserPosts = (id) => {
  return axios.get(`/api/posts/user/${id}`);
};

export const createPost = (data) => {
  // debugger
  return axios.post("/api/posts/create-post", data);
};

export const deletePost = (id) => {
  return axios.delete(`/api/posts/${id}`);
};
