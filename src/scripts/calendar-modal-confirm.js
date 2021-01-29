
function openModal(modalBackSelector) {
    const modalPanel = document.querySelector(modalBackSelector);
    modalPanel.classList.add('show');
    modalPanel.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}
function closeModal(modalBackSelector) {
    const modalPanel = document.querySelector(modalBackSelector);
    modalPanel.classList.remove('show');
    modalPanel.classList.add('hide');
    document.body.style.overflow = '';
}
function modal(modalBackSelector, btnYesSelector, btnNoSelector, modalWindowSelector, parent) {
    const btnNo = document.querySelector(btnNoSelector);
    const btnYes = document.querySelector(btnYesSelector);
    
    const remove = () => {
        btnYes.removeEventListener('click', replyYes)
        btnNo.removeEventListener('click', replyNo);
    }
    const replyYes = () => {
        parent.classList.remove('show', 'full');
        parent.classList.add('hide');
        const id = parent.getAttribute('id');        
        document.getElementById(`${id}span`).innerHTML='';
        localStorage.removeItem(id);
        closeModal(modalBackSelector);
        remove();
    }
    const replyNo = () => {
        closeModal(modalBackSelector);
        remove();
    }
    
    btnYes.addEventListener('click', replyYes)
    btnNo.addEventListener('click', replyNo);   
}

export {modal, openModal};