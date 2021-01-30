import createTable from './calendar-create-table';
import {modalConfirm, openModal, modalInfo} from './calendar-modal-windows';
import filterByName from './calendar-filter';
import '../styles/calendar.scss';

//Create calendar
const table = document.querySelector('.table');
const arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
createTable(arrDay, arrTime, table);

// Add events to calendar
const crosses = document.querySelectorAll('.cross');
const information = document.querySelectorAll('.info');
let keys = Object.keys(localStorage);
keys.forEach(item => {
    const meetingField = document.getElementById(`${item}`);
    const meetingData = localStorage.getItem(item);
    const objData = JSON.parse(meetingData);
    const {idName, cheUsr, inpEve, selDay, selTim} = objData;

    const newSpan = document.getElementById(`${idName}span`);
    newSpan.innerHTML = `${inpEve.length > 25 ? (inpEve.slice(0, 25)+'...') : inpEve}`;

    const newInfoSpan = document.createElement('span');
    newInfoSpan.setAttribute('id', `${idName}info`);
    newInfoSpan.classList.add('hide');
    newInfoSpan.innerHTML = `Name of event: ${inpEve}\n\nParticipants: ${cheUsr.join(' ')}\n\nDay: ${selDay.toUpperCase()}\n\nTime: ${selTim}`;
   
    meetingField.appendChild(newInfoSpan);
    meetingField.classList.remove('hide');
    meetingField.classList.add('show', 'full');
    cheUsr.forEach(usrName => meetingField.classList.add(usrName));

});
crosses.forEach(item => {
    if (item.parentNode.classList.contains('full') === true) {
        item.addEventListener('click', e => {
            if(e.target && e.target.classList.contains('cross') === true) {
                openModal('.modal_bg');
                const parent = e.target.parentNode;
                modalConfirm('.modal_bg', '.btn_yes', '.btn_no', parent);   
            }
        });
    }
});

const textInfo = document.querySelector('.modal_text_info');
information.forEach(item => {
    if (item.parentNode.classList.contains('full') === true) {
        item.addEventListener('click', e => {
            if(e.target && e.target.classList.contains('info') === true) {
                
                const id = e.target.parentNode.getAttribute('id');
                const infoSpan = document.getElementById(`${id}info`);
                textInfo.innerHTML = `${infoSpan.textContent}`;
                openModal('.modal_bg_info');
                modalInfo('.modal_bg_info', '.btn_yes_info', '.modal_container_info');   
            }
        });
    }
});


filterByName('.full', '#filterName')


const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    window.location.href = "./form.html";
});