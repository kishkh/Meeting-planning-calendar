import {modalConfirm, openModal, modalInfo} from './calendar-modal-windows';

function eventCrosses (crossSelector) {
    const crosses = document.querySelectorAll(crossSelector);
    crosses.forEach(item => {
        item.addEventListener('click', e => {
            if(e.target && e.target.classList.contains('cross') === true) {
                openModal('.modal_bg');
                const parent = e.target.parentNode;
                modalConfirm('.modal_bg', '.btn_yes', '.btn_no', parent);   
            }
        });
    });
}

function eventInfo(infoSelector, textFieldSelector) {
    const information = document.querySelectorAll(infoSelector);
    const textInfo = document.querySelector(textFieldSelector);
    information.forEach(item => {
        item.addEventListener('click', e => {
            if(e.target && e.target.classList.contains('info') === true) {
                
                const id = e.target.parentNode.getAttribute('id');
                const infoSpan = document.getElementById(`${id}info`);
                textInfo.innerHTML = `${infoSpan.textContent}`;
                openModal('.modal_bg_info');
                modalInfo('.modal_bg_info', '.btn_yes_info');   
            }
        });
    });
}
export {eventCrosses, eventInfo};