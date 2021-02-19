import _ from 'lodash';


import { GET_LOAD_CONTACT_LIST, GET_CONTACT, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT } from '../Actions/types';



export default (state = {}, action) => {
  switch (action.type) {
    case GET_LOAD_CONTACT_LIST:
      return {
        ...state,
        ..._.mapKeys(action.payload, 'id')
      };
    case GET_CONTACT:
   
    case ADD_CONTACT:
    case EDIT_CONTACT:
      return {
        ...state,
        [action.payload.id]: action.payload
      };
      case SEARCH_CONTACT: {
        const {value} = action;
        const contacts = state.contents.filter((val) => val.includes(value));
        return {...state, value, contacts};
      }
    case DELETE_CONTACT:
      return _.omit(state, action.payload);

    
    default:
      return state;
  }



};




