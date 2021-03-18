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
                newCont.classList.add('headline', 'container');
            
                let newSpan = document.createElement('span');
                newSpan.classList.add('span-head');
                newSpan.textContent = `${arrDayName[cont]}`;
                newCont.appendChild(newSpan);
            
            } else if (cont === 0) {
                newCont.setAttribute('id', `${arrTimeName[row].toLowerCase()}`);
                newCont.classList.add('headline', 'container');
            
                let newSpan = document.createElement('span');
                newSpan.classList.add('span-head');
                newSpan.textContent = `${arrTimeName[row]}`;
                newCont.appendChild(newSpan);
            
            } else {
                newCont.classList.add('container', 'empty');
                const newDiv = document.createElement('div');
                newDiv.setAttribute('id', `${arrDayName[cont].toLowerCase()}${arrTimeName[row]}`)
                newDiv.classList.add('meetField', 'hide');
                
                const newSpan = document.createElement('span');
                newSpan.setAttribute('id', `${arrDayName[cont].toLowerCase()}${arrTimeName[row]}span`);
                
                const newInfo = document.createElement('span');
                newInfo.classList.add('info');
                newInfo.innerHTML = '&#128712';
                const newCross = document.createElement('span');
                newCross.classList.add('cross');
                newCross.innerHTML ='&#10006'
                
                
                newDiv.appendChild(newSpan);
                newDiv.appendChild(newInfo);
                newDiv.appendChild(newCross);
                newCont.appendChild(newDiv);
            }
            newRow.appendChild(newCont);
        }
        parentSelector.appendChild(newRow);
    }
}

export default createTable;