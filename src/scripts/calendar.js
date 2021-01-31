import createTable from './calendar-create-table';
import showDataFromLocalStorage from './calendar-get-data-from-local-storage';
import {modalConfirm, openModal, modalInfo} from './calendar-modal-windows';
import filterByName from './calendar-filter';
import '../styles/calendar.scss';

//Create calendar
const table = document.querySelector('.table');
const arrDay = ['Time', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const arrTime = ['Time', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'];
createTable(arrDay, arrTime, table);

// Add events to calendar

showDataFromLocalStorage();

const crosses = document.querySelectorAll('.cross');
const information = document.querySelectorAll('.info');
crosses.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target && e.target.classList.contains('cross') === true) {
            openModal('.modal_bg');
            const parent = e.target.parentNode;
            modalConfirm('.modal_bg', '.btn_yes', '.btn_no', parent);   
        }
    });
});

const textInfo = document.querySelector('.modal_text_info');
information.forEach(item => {
    item.addEventListener('click', e => {
        if(e.target && e.target.classList.contains('info') === true) {
            
            const id = e.target.parentNode.getAttribute('id');
            const infoSpan = document.getElementById(`${id}info`);
            textInfo.innerHTML = `${infoSpan.textContent}`;
            openModal('.modal_bg_info');
            modalInfo('.modal_bg_info', '.btn_yes_info', '.modal_container_info');   
        }
    });
});

// filter
filterByName('.full', '#filterName')
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
const btnAdd = document.querySelector('#btn-add');
btnAdd.addEventListener('click', () => {
    window.location.href = "./form.html";
});