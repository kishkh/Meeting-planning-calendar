// Use cycle in cycle for create new table
function createTable(arrDayName, arrTimeName, parentSelector) {
    for(let row = 0; row < arrTimeName.length; row++) {

        let newRow = document.createElement('div');
        
        newRow.setAttribute('id',`row-${arrTimeName[row]}`);
        newRow.classList.add('row');
        
        for(let cont = 0; cont < arrDayName.length; cont++){
            
            let newCont = document.createElement('div');
            
            if (row === 0) {
                newCont.setAttribute('id', `${arrTimeName[row]}`);
                newCont.classList.add('headline', 'container', 'full');
            
                let newLab = document.createElement('label');
                newLab.setAttribute('for', `${arrDayName[cont]}`);
                newLab.textContent = `${arrDayName[cont]}`;
                newCont.appendChild(newLab);
            
            } else if (cont === 0) {
                newCont.setAttribute('id', `${arrTimeName[row].toLowerCase()}`);
                newCont.classList.add('headline', 'container', 'full');
            
                let newLab = document.createElement('label');
                newLab.setAttribute('for', `${arrTimeName[row].toLowerCase()}`);
                newLab.textContent = `${arrTimeName[row]}`;
                newCont.appendChild(newLab);
            
            } else {
                newCont.setAttribute('id', `${arrDayName[cont].toLowerCase()}${arrTimeName[row]}`);
                newCont.classList.add('container', 'empty')
            }
            newRow.appendChild(newCont);
        }
        parentSelector.appendChild(newRow);
    }
}

export default createTable;