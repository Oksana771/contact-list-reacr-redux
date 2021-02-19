import { GET_LOAD_CONTACT_LIST, GET_CONTACT, ADD_CONTACT, DELETE_CONTACT, EDIT_CONTACT, SEARCH_CONTACT } from './types';
import axios from 'axios';
import { reset } from 'redux-form';
import history from '../../components/history';



export const getContactList = () => async dispatch => {
  const res = await axios.get('/api/contacts/');
  dispatch({
    type: GET_LOAD_CONTACT_LIST,
    payload: res.data
  });
};

export const getContact = id => async dispatch => { // added
  const res = await axios.get(`/api/contacts/${id}/`);
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};


export const addContact = formValues => async dispatch => {
  const res = await axios.post(`/api/contacts/`, { ...formValues });
  dispatch({
    type: ADD_CONTACT,

    payload: res.data
  });
  dispatch(reset('contactForm'));
  history.push('/')
};
export const deleteContact = id => async dispatch => {
  await axios.delete(`/api/contacts/${id}/`);

  dispatch({
    type: DELETE_CONTACT,
    payload: id
  });
  history.push('/');
}

export const editContact = (id, formValues) => async dispatch => {
  const res = await axios.patch(`/api/contacts/${id}/`, formValues);
  dispatch({
    type: EDIT_CONTACT,
    payload: res.data
  });
  history.push('/');
};

export function search(value) {
  return {type: SEARCH_CONTACT, value};
}