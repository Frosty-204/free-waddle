/* eslint-disable */

import { Modal } from 'bootstrap'
import axios from 'axios';


const addTourBtn = document.querySelector('#add-tour-btn')
const locationBtn = document.querySelector('#location-btn')

if (addTourBtn) addTourBtn.addEventListener('click', (e) => {
  const addTourModal = new Modal('#add-tour-modal')

  addTourModal.show()

})
if (locationBtn) locationBtn.addEventListener('click', (e) => {
  const locationModal = new Modal('#location-modal')

  locationModal.show()

})


export const addTour = async (tour) => {

  try {

    console.log('step 33:', tour);

    const res = await axios.post('/api/v1/tours', tour);


    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully');
      window.setTimeout(() => {
        location.assign('/manage-users');
      }, 1000);
    }

  } catch (error) {
    console.log('step 55', error)
  }

}
