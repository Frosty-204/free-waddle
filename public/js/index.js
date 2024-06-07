import '@babel/polyfill';
import { login, logout } from './login';
import { forgotPassword } from './forgotPassword';
import { resetPassword } from './resetPassword';
import { signUp } from './signUp';
import { addUser, deleteUser, editUser } from './manageUsers.js';
import { Modal } from 'bootstrap';
import { addTour } from './manageTours.js';
// import { displayMap } from './mapbox';
import { updateSettings } from './updateSettings';
import { bookTour } from './stripe';
// PULLED
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons';
import './manageTours.js';

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
  isEnabled as isDarkReaderEnabled
} from 'darkreader';

// DOM ELEMENTS
// const mapBox = document.getElementById('map');

const loginForm = document.querySelector('.form--login');
const logOutBtn = document.querySelector('.nav__el--logout');

const signupForm = document.querySelector('.form--signup');

const resetPasswordForm = document.querySelector('.form--resetPassword');
const forgotPasswordForm = document.querySelector('.form--forgotPassword');

const userDataForm = document.querySelector('.form-user-data');
const userPasswordForm = document.querySelector('.form-user-password');
const bookBtn = document.getElementById('book-tour');

const darkModeButton = document.getElementById('dark-mode-button');

// Retrieve user preference from localStorage
const userPreference = localStorage.getItem('darkMode');

if (userPreference === 'enabled') {
  enableDarkMode({
    brightness: 100,
    contrast: 90,
    sepia: 10
  });
  darkModeButton.classList.add('active');
}

darkModeButton.addEventListener('click', toggleDarkMode);

function toggleDarkMode() {
  if (isDarkReaderEnabled()) {
    disableDarkMode();
    darkModeButton.classList.remove('active');
    // Remove user preference from localStorage
    localStorage.removeItem('darkMode');
  } else {
    enableDarkMode({
      brightness: 100,
      contrast: 90,
      sepia: 10
    });
    darkModeButton.classList.add('active');
    // Save user preference to localStorage
    localStorage.setItem('darkMode', 'enabled');
  }
}

// if (mapBox) {
//   const locations = JSON.parse(mapBox.dataset.locations);
//   displayMap(locations);
// }

if (signupForm) {
  signupForm.addEventListener('submit', async e => {
    e.preventDefault();

    document.querySelector('.obtn--green').textContent = 'Loading...';

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;
    await signUp(name, email, password, passwordConfirm);

    document.querySelector('.obtn--green').textContent = 'Signup';
  });
}
if (forgotPasswordForm) {
  forgotPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    await forgotPassword(email);
  });
}

if (resetPasswordForm) {
  resetPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const password_confirm = document.getElementById('password-confirm').value;

    const url = window.location.href;
    const regex = /\/resetPassword\/(.+)/;
    const match = url.match(regex);
    const token = match ? match[1] : null;

    console.log(token);

    await resetPassword(password, password_confirm, token);
  });
}

if (loginForm) {
  loginForm.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    await login(email, password);
  });
}

if (logOutBtn) {
  logOutBtn.addEventListener('click', logout);
}

if (userDataForm) {
  userDataForm.addEventListener('submit', e => {
    e.preventDefault();

    const form = new FormData();
    form.append('name', document.getElementById('name').value);
    form.append('email', document.getElementById('email').value);
    form.append('photo', document.getElementById('photo').files[0]);

    console.log(form);
    // const name = document.getElementById('name').value;
    // const email = document.getElementById('email').value;

    updateSettings(form, 'data');
  });
}

if (userPasswordForm) {
  userPasswordForm.addEventListener('submit', async e => {
    e.preventDefault();
    document.querySelector('.obtn--save-password').textContent = 'Updating...';
    const passwordCurrent = document.getElementById('password-current').value;
    const password = document.getElementById('password').value;
    const passwordConfirm = document.getElementById('password-confirm').value;

    await updateSettings(
      { passwordCurrent, password, passwordConfirm },
      'password'
    );
    document.querySelector('.obtn--save-password').textContent =
      'Save password';
  });
}

if (bookBtn) {
  bookBtn.addEventListener('click', e => {
    // target -> element which was clicked
    e.target.textContent = 'Processing...';
    const { tourId } = e.target.dataset;
    bookTour(tourId);
  });
}

// PULLED

const addUserForm = document.querySelector('#add-user-form');

if (addUserForm) {
  console.log('step 22 :', addUserForm);
  const addUserModal = new Modal('#userModal');
  addUserForm.addEventListener('submit', async e => {
    console.log('d');
    e.preventDefault();
    const form = new FormData();

    form.append('name', document.querySelector('#name_manage_users').value);
    form.append('email', document.querySelector('#email_manage_users').value);
    form.append('role', document.querySelector('#role_manage_users').value);
    form.append(
      'password',
      document.querySelector('#password_manage_users').value
    );
    form.append('photo', document.getElementById('photo').files[0]);

    console.log('form', form);

    await addUser(form);

    document.querySelector('#name_manage_users').value = '';
    document.querySelector('#email_manage_users').value = '';
    document.querySelector('#password_manage_users').value = '';
    document.getElementById('photo').files[0] = '';
    addUserModal.hide();
  });
}

const searchUser = document.querySelector('#search-manage-users');

if (searchUser) {
  searchUser.addEventListener('submit', e => {
    e.preventDefault();

    location.assign(
      location.origin +
        location.pathname +
        '?search=' +
        document.querySelector('#search-name-manage-users').value
    );
  });
}

const editUserForm = document.querySelector('#edit-user-form');
if (editUserForm) {
  const userModal = new Modal('#editUserModal');

  editUserForm.addEventListener('submit', async e => {
    e.preventDefault();
    const form = new FormData();
    const id = document.querySelector(
      'form#edit-user-form #edit_id_manage_users'
    ).value;
    form.append(
      'name',
      document.querySelector('form#edit-user-form #edit_name_manage_users')
        .value
    );
    form.append(
      'email',
      document.querySelector('form#edit-user-form #edit_email_manage_users')
        .value
    );
    form.append(
      'role',
      document.querySelector('form#edit-user-form #edit_role_manage_users')
        .value
    );
    if (
      document.querySelector('form#edit-user-form #edit_password_manage_users')
        .value
    )
      form.append(
        'password',
        document.querySelector(
          'form#edit-user-form #edit_password_manage_users'
        ).value
      );
    if (document.querySelector('form#edit-user-form #edit_photo').files[0])
      form.append(
        'photo',
        document.querySelector('form#edit-user-form #edit_photo').files[0]
      );

    console.log(
      'photo :',
      document.querySelector('form#edit-user-form #edit_photo').files
    );
    // form.append('photo', document.querySelector('#test-ph').files[0]);

    console.log('form', form);

    await editUser(form, id);

    userModal.hide();
  });
}

const editUserBtn = document.querySelectorAll('#edit-user-btn');
if (editUserBtn) {
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

if (deleteBtns) {
  deleteBtns.forEach((node, index) => {
    const id = document.querySelector(
      `#user-table table.table.table-success tbody tr #id-${index}`
    ).innerHTML;
    node.addEventListener('click', async () => {
      const result = confirm('Are you sure ?');

      console.log('res', result);
      if (result) await deleteUser(id);
    });
  });
}

// manage tours

const addTourBtn = document.querySelector('#add-tour-btn');

if (addTourBtn) {
  addTourBtn.addEventListener('click', () => {});
}

const addTourForm = document.querySelector('#add-tour-form');

if (addTourForm) {
  console.log('step 22 :', addUserForm);
  addTourForm.addEventListener('submit', async e => {
    console.log('d');
    e.preventDefault();
    const form = new FormData();
    let guides = [];
    form.append('name', document.querySelector('#name_manage_tours').value);
    form.append(
      'slug',
      document.querySelector('#link_name_manage_tours').value
    );
    form.append(
      'duration',
      document.querySelector('#duration_manage_tours').value
    );
    form.append(
      'difficulty',
      document.querySelector('#difficulty_manage_tours').value
    );
    form.append('price', document.querySelector('#price_manage_tours').value);

    document.querySelectorAll('#guides_checkbox').forEach(node => {
      if (node.checked) guides.push(node.value);
    });
    form.append('guides', guides);
    form.append(
      'maxGroupSize',
      document.querySelector('#participants_manage_tours').value
    );
    form.append(
      'summary',
      document.querySelector('#summary_manage_tours').value
    );
    form.append(
      'description',
      document.querySelector('#description_manage_tours').value
    );
    form.append(
      'imageCover',
      document.getElementById('image_cover_manage_tours').files[0]
    );

    console.log('form', form);

    await addTour(form);

    document.querySelector('#name_manage_tours').value = '';
    document.querySelector('#link_name_manage_tours').value = '';
    document.querySelector('#duration_manage_tours').value = '';
    document.querySelector('#duration_manage_tours').value = '';
    document.querySelector('#price_manage_tours').value = '';
    document.querySelector('#participants_manage_tours').value = '';
    document.querySelector('#summary_manage_tours').value = '';
    document.querySelector('#description_manage_tours').value = '';
    // document.getElementById('image_cover_manage_tours').files =[]

    document.querySelector('tour-modal-close').click();
  });
}
