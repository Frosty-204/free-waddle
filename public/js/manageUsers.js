/* eslint-disable */

import axios from 'axios';
import { showAlert } from './alert';

export const addUser = async user => {
  try {
    console.log('step 33:', user);

    const res = await axios.post('/api/v1/users', user);

    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/manage-users');
      }, 1000);
    }
  } catch (error) {
    console.log('step 55', error);
  }
};
export const editUser = async (user, id) => {
  try {
    console.log('step 33:', user, id);

    const res = await axios.put('/api/v1/users/' + id, user);

    if (res.data.status === 'success') {
      // showAlert('success', 'Logged in successfully');
      // window.setTimeout(() => {
      //   // location.assign('/manage-users');
      // }, 1000);
    }
  } catch (error) {
    console.log('step 55', error);
  }
};

export const deleteUser = async id => {
  try {
    const res = await axios.delete('/api/v1/users/' + id);

    if (res.data.status === 'success') {
      // showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/manage-users');
      }, 1000);
      // document.querySelector('form#edit-user-form #edit_name_manage_users').value = ''
      // document.querySelector('form#edit-user-form #edit_email_manage_users').value = ''
      // document.querySelector('form#edit-user-form #edit_password_manage_users').value = ''
      // document.querySelector('form#edit-user-form #photo').files[0] = ''
    }
  } catch (error) {
    console.log('step 55', error);
  }
};
