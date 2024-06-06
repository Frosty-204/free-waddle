/* eslint-disable */
import '@babel/polyfill';
import { Modal } from 'bootstrap'
import { login, logout } from './login';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons"
import "./manageTours.js"
import { addUser, deleteUser, editUser } from "./manageUsers.js"
import { addTour } from "./manageTours.js"
// NOTE DOM elements
const loginForm = document.querySelector('form.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');
const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.querySelector('#book-tour');



// Manage Users



// NOTE Values
// console.log("log ", loginForm);

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
  });
}
if (logOutBtn) logOutBtn.addEventListener('click', logout);

if (userDataForm)
  userDataForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    updateSettings(form, 'data');
  });

if (userPasswordForm)
  userPasswordForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    document.querySelector('.btn--save-password').textContent = 'Updating...';

    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password',
    );

    document.querySelector('.btn--save-password').textContent = 'Save password';

    document.getElementById('password-current').value =
      document.getElementById('password').value =
      document.getElementById('password-confirm').value =
      '';
  });

if (bookBtn) {
  bookBtn.addEventListener('click', (e) => {
    e.target.textContent = 'Processing';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}

const addUserForm = document.querySelector('#add-user-form')

if (addUserForm) {
  console.log("step 22 :", addUserForm);
  const addUserModal = new Modal('#userModal')
  addUserForm.addEventListener('submit', async (e) => {
    console.log('d');
    e.preventDefault();
    const form = new FormData();

    form.append('name', document.querySelector('#name_manage_users').value);
    form.append('email', document.querySelector('#email_manage_users').value);
    form.append('role', document.querySelector('#role_manage_users').value);
    form.append('password', document.querySelector('#password_manage_users').value);
    form.append('photo', document.getElementById('photo').files[0]);

    console.log('form', form)


    await addUser(form)

    document.querySelector('#name_manage_users').value = ''
    document.querySelector('#email_manage_users').value = ''
    document.querySelector('#password_manage_users').value = ''
    document.getElementById('photo').files[0] = ''
    addUserModal.hide()



  })


}

const searchUser = document.querySelector('#search-manage-users')

if (searchUser) {
  searchUser.addEventListener('submit', (e) => {
    e.preventDefault();

    location.assign(location.origin + location.pathname + '?search=' + document.querySelector('#search-name-manage-users').value)
  })
}

const editUserForm = document.querySelector('#edit-user-form')
const userModal = new Modal('#editUserModal')
if (editUserForm) {


  editUserForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    const form = new FormData();
    const id = document.querySelector('form#edit-user-form #edit_id_manage_users').value
    form.append('name', document.querySelector('form#edit-user-form #edit_name_manage_users').value);
    form.append('email', document.querySelector('form#edit-user-form #edit_email_manage_users').value);
    form.append('role', document.querySelector('form#edit-user-form #edit_role_manage_users').value);
    if (document.querySelector('form#edit-user-form #edit_password_manage_users').value)
      form.append('password', document.querySelector('form#edit-user-form #edit_password_manage_users').value);
    if (document.querySelector('form#edit-user-form #edit_photo').files[0])
      form.append('photo', document.querySelector('form#edit-user-form #edit_photo').files[0]);

    console.log('photo :', document.querySelector('form#edit-user-form #edit_photo').files);
    // form.append('photo', document.querySelector('#test-ph').files[0]);

    console.log('form', form)


    await editUser(form, id)


    userModal.hide()


  })
}

const editUserBtn = document.querySelectorAll('#edit-user-btn')
if (editUserBtn) {

  editUserBtn.forEach((node, index) => {
    node.addEventListener('click', () => {
      console.log("id", document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML);

      document.querySelector('#edit_id_manage_users').value = document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML
      document.querySelector('#edit_name_manage_users').value = document.querySelector(`#user-table table.table.table-success tbody tr #name-${index}`).innerHTML
      document.querySelector('#edit_email_manage_users').value = document.querySelector(`#user-table table.table.table-success tbody tr #email-${index}`).innerHTML
      document.querySelector('#edit_role_manage_users').value = document.querySelector(`#user-table table.table.table-success tbody tr #role-${index}`).innerHTML

      userModal.show()

    })

  })

}

const deleteBtns = document.querySelectorAll('#user-table.table-responsive tbody tr td a#delete-btn')

if (deleteBtns) {

  deleteBtns.forEach((node, index) => {

    const id = document.querySelector(`#user-table table.table.table-success tbody tr #id-${index}`).innerHTML
    node.addEventListener('click', async () => {
      const result = confirm('Are you sure ?')

      console.log("res", result);
      if (result)
        await deleteUser(id)

    })
  })


}


// manage tours

const addTourBtn = document.querySelector('#add-tour-btn')


if (addTourBtn) {

  addTourBtn.addEventListener('click', () => {





  })


}



const addTourForm = document.querySelector('#add-tour-form')

if (addTourForm) {
  console.log("step 22 :", addUserForm);
  addTourForm.addEventListener('submit', async (e) => {
    console.log('d');
    e.preventDefault();
    const form = new FormData();
    let guides = []
    form.append('name', document.querySelector('#name_manage_tours').value);
    form.append('slug', document.querySelector('#link_name_manage_tours').value);
    form.append('duration', document.querySelector('#duration_manage_tours').value);
    form.append('difficulty', document.querySelector('#difficulty_manage_tours').value);
    form.append('price', document.querySelector('#price_manage_tours').value);


    document.querySelectorAll('#guides_checkbox').forEach((node) => {
      if (node.checked)
        guides.push(node.value)
    })
    form.append('guides', guides);
    form.append('maxGroupSize', document.querySelector('#participants_manage_tours').value);
    form.append('summary', document.querySelector('#summary_manage_tours').value);
    form.append('description', document.querySelector('#description_manage_tours').value);
    form.append('imageCover', document.getElementById('image_cover_manage_tours').files[0]);

    console.log('form', form)


    await addTour(form)

    document.querySelector('#name_manage_tours').value = ''
    document.querySelector('#link_name_manage_tours').value = ''
    document.querySelector('#duration_manage_tours').value = ''
    document.querySelector('#duration_manage_tours').value = ''
    document.querySelector('#price_manage_tours').value = ''
    document.querySelector('#participants_manage_tours').value = ''
    document.querySelector('#summary_manage_tours').value = ''
    document.querySelector('#description_manage_tours').value = ''
    // document.getElementById('image_cover_manage_tours').files =[]


    document.querySelector('tour-modal-close').click()


  })


}
