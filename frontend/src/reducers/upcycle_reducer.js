import {
  RECEIVE_UPCYCLE,
} from "../actions/post_actions";

const UpcycleReducer = ( state = {}, action ) => {
  Object.freeze(state);
  
  switch(action.type){
    case RECEIVE_UPCYCLE:
      debugger
        return Object.assign({}, state, action.upcycle.data);
    default:
        return state;
  }
}

export default UpcycleReducer;