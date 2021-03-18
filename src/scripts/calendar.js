import createTable from './calendar-create-table';
import showDataFromLocalStorage from './calendar-get-data-from-local-storage';
import {eventCrosses, eventInfo} from './calendar-cross-and-info-event';
import filterByName from './calendar-filter';
import '../styles/calendar.scss';

//Create calendar
const table = document.querySelector('.table');
const arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
createTable(arrDay, arrTime, table);

// Add events to calendar
showDataFromLocalStorage();

// Add events to buttons from event container
eventCrosses('.cross');
eventInfo('.info', '.modal_text_info');

// filter
filterByName('.full', '#filterName');

// drag and drop
const dragAndDrop = () => {
    
    const removeEvent = function () {
        const full = document.querySelectorAll('.full');
        const empty = document.querySelectorAll('.empty');
        full.forEach(item => {
            item.removeEventListener('dragstart', dragStart);
            item.removeEventListener('dragend', dragEnd);
        });
        empty.forEach(item => {
            item.removeEventListener('dragover', dragOver);
            item.removeEventListener('dragenter', dragEnter);
            item.removeEventListener('dragleave', dragLeave);
            item.removeEventListener('drop', dragDrop);
        });
    }
    
    const addEvent = function () {
        const full = document.querySelectorAll('.full');
        const empty = document.querySelectorAll('.empty');
        full.forEach(item => {
            item.addEventListener('dragstart', dragStart);
            item.addEventListener('dragend', dragEnd);
        });
        empty.forEach(item => {
            item.addEventListener('dragover', dragOver);
            item.addEventListener('dragenter', dragEnter);
            item.addEventListener('dragleave', dragLeave);
            item.addEventListener('drop', dragDrop);
        });
    }
    const dragStart = function () {
        removeEvent();
        addEvent();
        setTimeout(()=>{
            this.classList.add('hide');
            const id = this.getAttribute('id');
            const data = localStorage.getItem(id);
            localStorage.setItem('spare', data);
        }, 50);
    }
    const dragEnd = function () {
        this.classList.remove('hide');

    }
    const dragOver = function (e) {
        e.preventDefault()
    }
    const dragEnter = function () {
        this.classList.add('hovered');
    }
    const dragLeave = function () {
        this.classList.remove('hovered');
    }
    const dragDrop = function () {
        removeEvent();
        this.classList.remove('hovered');
        const field = this.querySelector('.meetField');
        const id = field.getAttribute('id');
        const olddata = JSON.parse(localStorage.getItem('spare'));
        console.log(id.slice(0,3));
        const {idName, inpEve, cheUsr} = olddata;
        const newDataJson = JSON.stringify({
            'idName': id,
            'inpEve': inpEve,
            'cheUsr': [...cheUsr],
            'selDay': id.slice(0,3),
            'selTim': id.slice(3)
        }); 
        const oldField = document.getElementById(idName);
        oldField.parentNode.classList.add('empty');
        oldField.className = 'meetField hide';
        document.getElementById(`${idName}info`).remove();
        localStorage.setItem(id, newDataJson);
        localStorage.removeItem(idName);
        showDataFromLocalStorage();


        console.log('drop', olddata);
        
        addEvent();
        
        
    }
    addEvent();  
};

dragAndDrop();

// Add event to button 'new event'
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    window.location.href = "./form.html";
});