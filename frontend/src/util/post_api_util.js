import axios from "axios";

export const getPost = (id) => {
  return axios.get(`/api/posts/${id}`);
};

export const getPosts = () => {

  return axios.get("/api/posts");
};

export const getUserPosts = (id) => {
  return axios.get(`/api/posts/user/${id}`);
};

export const createPost = (data) => {
  
  return axios.post("/api/posts/create-post", data);
};

export const deletePost = (id) => {
  return axios.delete(`/api/posts/${id}`);
};

export const getPostUpcycles = (id) => {
  return axios.get(`/api/posts/${id}/upcycles`);
};

export const createPostUpcycle = (id) => {
  return axios.post(`/api/posts/${id}/create-upcycle`);
}

export const getTopPost = () => {
  return axios.get(`/api/posts/top-post`);
}