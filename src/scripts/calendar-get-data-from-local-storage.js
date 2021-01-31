// Get data from localStorage. Create and fill meeting container
function showDataFromLocalStorage() {
    let keys = Object.keys(localStorage);
    keys.forEach(item => {
        if (item === 'spare') {
            return false;
        } else {
            const meetingField = document.getElementById(`${item}`);
            const objData = JSON.parse(localStorage.getItem(item));
            
            const {idName, cheUsr, inpEve, selDay, selTim} = objData;

            const newSpan = document.getElementById(`${idName}span`);
            newSpan.innerHTML = `${inpEve.length > 25 ? (inpEve.slice(0, 25)+'...') : inpEve}`;

            const newInfoSpan = document.createElement('span');
            newInfoSpan.setAttribute('id', `${idName}info`);
            newInfoSpan.classList.add('hide');
            newInfoSpan.innerHTML = `Name of event: ${inpEve}\n\nParticipants: ${cheUsr.join(' ')}\n\nDay: ${selDay.toUpperCase()}\n\nTime: ${selTim}`;
            
            meetingField.parentNode.classList.remove('empty');
            meetingField.appendChild(newInfoSpan);
            meetingField.classList.remove('hide');
            meetingField.classList.add('show', 'full');
            meetingField.setAttribute('draggable', 'true');
            cheUsr.forEach(usrName => meetingField.classList.add(usrName));
        }    
    });
}

export default showDataFromLocalStorage;