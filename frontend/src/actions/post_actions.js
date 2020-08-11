import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveUserPosts = (posts) => ({
  type: RECEIVE_USER_POSTS,
  posts
});

export const createNewPost = (post) => ({
  type: CREATE_POST,
  post
});

export const deletePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

// 

export const fetchPost = (id) => (dispatch) => (
  PostAPIUtil.getPost(id)
    .then((post) => dispatch(getPost(post)))
    .catch((err) => console.log(err))
);

export const fetchPosts = () => (dispatch) => (
    PostAPIUtil.getPosts()
        .then((posts) => dispatch(getPosts(posts)))
        .catch((err) => console.log(err))
);

