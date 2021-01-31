const wrapper = document.querySelector('.wrapper');
function openModal(modalBackSelector) {
    const modalPanel = document.querySelector(modalBackSelector);
    modalPanel.classList.add('show');
    modalPanel.classList.remove('hide');
    wrapper.style.overflow = 'hidden';
    wrapper.style.pointerEvents =' none';
}
function closeModal(modalBackSelector) {
    const modalPanel = document.querySelector(modalBackSelector);
    modalPanel.classList.remove('show');
    modalPanel.classList.add('hide');
    wrapper.style.overflow = '';
    wrapper.style.pointerEvents ='';
}
function modalInfo(modalBackSelector, btnYesSelector) {
    const btnYes = document.querySelector(btnYesSelector);
    const remove = () => {
        btnYes.removeEventListener('click', replyYes);    
    }
    const replyYes = (e) => {
        closeModal(modalBackSelector);
        remove();
    }
    btnYes.addEventListener('click', replyYes);

}   
function modalConfirm(modalBackSelector, btnYesSelector, btnNoSelector, parent) {
    const btnNo = document.querySelector(btnNoSelector);
    const btnYes = document.querySelector(btnYesSelector);
    
    const remove = () => {
        btnYes.removeEventListener('click', replyYes);
        btnNo.removeEventListener('click', replyNo);
    }
    const replyYes = () => {
        parent.className = 'meetField hide';
        parent.parentNode.classList.add('empty');
        const id = parent.getAttribute('id');        
        document.getElementById(`${id}span`).innerHTML='';
        document.getElementById(`${id}info`).remove();
        localStorage.removeItem(id);
        closeModal(modalBackSelector);
        remove();
    }
    const replyNo = () => {
        closeModal(modalBackSelector);
        remove();
    }
    
    btnYes.addEventListener('click', replyYes);
    btnNo.addEventListener('click', replyNo);   
}

export {modalConfirm, openModal, modalInfo};