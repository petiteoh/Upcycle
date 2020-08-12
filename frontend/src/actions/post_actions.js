import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receivePost = (post) => {
  // debugger
  return {
  type: RECEIVE_POST,
  post
}};

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

export const removePost = (postId) => ({
  type: REMOVE_POST,
  postId
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

// 

export const fetchPost = (id) => (dispatch) => (
  PostAPIUtil.getPost(id)
    .then((post) => 
        dispatch(receivePost(post)))
    .catch(err => 
        dispatch(receiveErrors(err.response.data)))
);

export const fetchPosts = () => (dispatch) => (
  PostAPIUtil.getPosts()
    .then((posts) => 
        dispatch(receivePosts(posts)))
    .catch(err => (dispatch(receiveErrors(err.response))))
);

export const fetchUserPosts = (id) => (dispatch) => (
  PostAPIUtil.getUserPosts(id)
    .then((posts) => 
        dispatch(receiveUserPosts(posts)))
    .catch((err) => {
      // debugger
      return (
        dispatch(receiveErrors(err.response.data)))}
  )
);

export const createPost = (data) => (dispatch) => {
// debugger
  return (
  PostAPIUtil.createPost(data)
    .then((post) => 
        dispatch(receivePost(post)))
    .catch((err) => 
        dispatch(receiveErrors(err.response.data)))
)};

export const deletePost = (id) => (dispatch) => (
  PostAPIUtil.deletePost(id)
    .then((postId) => 
        dispatch(removePost(postId)))
    .catch((err) => 
        dispatch(receiveErrors(err.response.data))
  )
);
