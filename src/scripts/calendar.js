import createTable from './create-calendar';
import '../styles/calendar.scss';

const table = document.querySelector('.table');
const arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
createTable(arrDay, arrTime, table);

const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    window.location.href = "./form.html";
    console.log('add');
});