import createTable from './calendar-create-table';
import {modal, openModal} from './calendar-modal-confirm';
import '../styles/calendar.scss';

//Create calendar
const table = document.querySelector('.table');
const arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
createTable(arrDay, arrTime, table);

// Add events to calendar
const crosses = document.querySelectorAll('.cross');
let keys = Object.keys(localStorage);
keys.forEach(item => {
    const meetingField = document.getElementById(`${item}`);
    const meetingData = localStorage.getItem(item);
    const objData = JSON.parse(meetingData);
    const {idName, cheUsr, inpEve, selDay, selTim} = objData;
    
    const newSpan = document.getElementById(`${idName}span`);

    newSpan.innerHTML = `${inpEve.length > 25 ? (inpEve.slice(0, 25)+'...') : inpEve}`;
    meetingField.classList.remove('hide');
    meetingField.classList.add('show', 'full');

});
crosses.forEach(item => {
    if (item.parentNode.classList.contains('full') === true) {
        item.addEventListener('click', e => {
            if(e.target && e.target.classList.contains('cross') === true) {
                openModal('.modal_bg');
                const parent = e.target.parentNode;
                modal('.modal_bg', '.btn_yes', '.btn_no', '.modal_container', parent);   
            }
        });
    }
});

//Filter



const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    window.location.href = "./form.html";
});