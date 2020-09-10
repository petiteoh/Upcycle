import { RECEIVE_USER_LOGOUT, RECEIVE_USER_SIGN_IN, RECEIVE_CURRENT_USER } from "../actions/session_actions";
import { RECEIVE_ALL_USERS } from "../actions/user_actions";

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default function (state = initialState, action) {
  
  switch (action.type) {
    case RECEIVE_USER_LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined,
      }
    case RECEIVE_USER_SIGN_IN:
      return {
        isAuthenticated: true,
        user: action.currentUser,
      }
    case RECEIVE_CURRENT_USER:
      
      return {
        isAuthenticated: true,
        user: action.currentUser.data
      };

    case RECEIVE_ALL_USERS:
      let currentUser = null;
      if (state.isAuthenticated){
        action.users.data.forEach(user => {
          if(state.user.id === user._id || state.user._id === user._id) currentUser = user;
        });
      }

      return {
        isAuthenticated: state.isAuthenticated,
        user: currentUser
      }
    default:
      return state;
  }
};
