// select-checkboxes functional
function selectCheckbox(arr, expanded, checkboxContainer, checkboxes, textTeam, teamNames) {
    window.addEventListener('click', e =>{
        if(e.target === checkboxContainer|| e.target === textTeam){
            
            if(!expanded) {
                checkboxes.classList.remove('hide');
                checkboxes.classList.add('showBlock');
                expanded = true;
            } else {
                checkboxes.classList.remove('showBlock');
                checkboxes.classList.add('hide');
                expanded = false;
            }
                
        } else if(e.target && 
            e.target.classList.contains("che-usr") === false && 
            e.target.classList.contains("lab-che") === false) {
                
                checkboxes.classList.remove('showBlock');
                checkboxes.classList.add('hide');
                expanded = false;   
                
       } else if(e.target && 
            e.target.classList.contains("che-usr") === true || 
            e.target.classList.contains("lab-che") === true) {
                
                arr.length = 0;
                teamNames.forEach(item => {
                    if(item.checked){arr.push(item.value);}
                });
                textTeam.innerHTML= arr.length > 0 ? arr.join(' ') : 'Add people'; 
            }
    });
        
}

export default selectCheckbox;