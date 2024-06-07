/* eslint-disable */

import { Modal } from 'bootstrap';

import axios from 'axios';
import { showAlert } from './alerts';

const editUserBtn = document.querySelectorAll('#edit-user-btn');
if (editUserBtn) {
  let userModal = new Modal('#editUserModal');
  editUserBtn.forEach((node, index) => {
    node.addEventListener('click', () => {
      console.log(
        'id',
        document.querySelector(
          `#user-table table.table.table-success tbody tr #id-${index}`
        ).innerHTML
      );

      document.querySelector(
        '#edit_id_manage_users'
      ).value = document.querySelector(
        `#user-table table.table.table-success tbody tr #id-${index}`
      ).innerHTML;
      document.querySelector(
        '#edit_name_manage_users'
      ).value = document.querySelector(
        `#user-table table.table.table-success tbody tr #name-${index}`
      ).innerHTML;
      document.querySelector(
        '#edit_email_manage_users'
      ).value = document.querySelector(
        `#user-table table.table.table-success tbody tr #email-${index}`
      ).innerHTML;
      document.querySelector(
        '#edit_role_manage_users'
      ).value = document.querySelector(
        `#user-table table.table.table-success tbody tr #role-${index}`
      ).innerHTML;

      userModal.show();
    });
  });
}

const deleteBtns = document.querySelectorAll(
  '#user-table.table-responsive tbody tr td a#delete-btn'
);
