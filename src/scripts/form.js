import {readData} from './form-erorr';
import selectCheckbox from './form-checkbox-selector';
import '../styles/form.scss';

//interface selectors
const form = document.querySelector('#form');

const nameEvent = document.querySelector('#inp-eve');
const teamNames = document.querySelectorAll('.che-usr');
const day = document.querySelector('#sel-day');
const time = document.querySelector('#sel-tim');

const back = document.querySelector('#back');
const submit = document.querySelector('#submit');

// checkboxes
const checkboxes = document.getElementById("checkboxes");
const checkboxContainer = document.querySelector('.selectPlace');
let expanded = false;

const textTeam = document.getElementById('text-team');
const users = [];

selectCheckbox(users, expanded, checkboxContainer, checkboxes, textTeam, teamNames);

// custom errors selectors
const textErr = document.getElementById('err-text');
const placeErr = document.querySelector('.err-place');
const closeErr = document.querySelector('.err-close');
function hideElement() {
    placeErr.classList.remove('showOpacity');
    placeErr.classList.add('hideOpacity');
    textErr.innerHTML=''
}
let timer ;

//Get data from form. Check and throw errors if something wrong. Send data to localStorage
form.addEventListener('click',(e) => {
    if(e.target && e.target === back) {
        window.location.href = "./calendar.html";
    }
    if(e.target && e.target === closeErr){
        clearTimeout(timer);
        placeErr.classList.remove('showOpacity');
        placeErr.classList.add('hideOpacity');
        textErr.innerHTML=''
    }
    if(e.target && e.target === submit) {
        e.preventDefault();
        
        let dataJson = JSON.stringify({
            'idName': `${day.value}${time.value}`,
            'inpEve': nameEvent.value.replace(/\s+/g, ' '),
            'cheUsr': [...users],
            'selDay': day.value,
            'selTim': time.value
        });     
                
        try {
            readData(dataJson);
        } catch(err) {
        
            placeErr.classList.remove('hideOpacity');
            placeErr.classList.add('showOpacity');
            textErr.innerHTML = `${err.name}   ${err.message}`;
            timer = setTimeout(hideElement, 5000);
        }
        
        if(readData(dataJson)) {
            localStorage.setItem(`${day.value}${time.value}`, dataJson);
            form.reset();
            window.location.href = "./calendar.html"
        } 
    }
}); 
