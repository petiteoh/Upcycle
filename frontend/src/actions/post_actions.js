import * as PostAPIUtil from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_EDIT_POST = "RECEIVE_EDIT_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_USER_POSTS = "RECEIVE_USER_POSTS";
export const CREATE_POST = "CREATE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_POST_UPCYCLES = "RECEIVE_POST_UPCYCLES";
export const RECEIVE_UPCYCLE = "RECEIVE_UPCYCLE";

export const receivePost = (post) => {
  return {
  type: RECEIVE_POST,
  post
}};

export const receivePostToEdit = (post) => {
  debugger
  return {
    type: RECEIVE_EDIT_POST,
    post
  }
}

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

export const receivePostUpcycles = (upcycles) => ({
  type: RECEIVE_POST_UPCYCLES,
  upcycles
})

export const receiveUpcycle = (upcycle) => ({
  type: RECEIVE_UPCYCLE,
  upcycle
})

export const fetchPost = (id) => (dispatch) => (
  PostAPIUtil.getPost(id)
    .then((post) => 
        dispatch(receivePost(post)))
    .catch(err => 
        dispatch(receiveErrors(err.response.data)))
);

export const fetchPostToEdit = (data) => (dispatch) => {
  debugger
  return (
    PostAPIUtil.getPostToEdit(data)
      .then((post) => dispatch(receivePostToEdit(post)))
      // .catch(err => dispatch(receiveErrors(err.response.data)))
  )
}

export const fetchPosts = () => (dispatch) => (
  PostAPIUtil.getPosts()
    .then((posts) => 
        dispatch(receivePosts(posts)))
    .catch(err => (dispatch(receiveErrors(err.response.data))))
);

export const fetchUserPosts = (id) => (dispatch) => {
  // debugger
  return PostAPIUtil.getUserPosts(id)
    .then((posts) => {
      // debugger
        dispatch(receiveUserPosts(posts))})
    .catch((err) => {
      // debugger
      return (
        dispatch(receiveErrors(err.response.data)))}
  )
};

export const createPost = (data) => (dispatch) => {
  debugger;
  return (
  PostAPIUtil.createPost(data)
    .then((post) => 
        dispatch(createNewPost(post)))
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

export const fetchPostUpcycles = (id) => dispatch => (
  PostAPIUtil.getPostUpcycles(id)
    .then(upcycles => dispatch(receivePostUpcycles(upcycles)))
)

export const upcyclePost = (id) => (dispatch) => {
  PostAPIUtil.createPostUpcycle(id)
    .then((upcycle) => dispatch(receiveUpcycle(upcycle)))
}