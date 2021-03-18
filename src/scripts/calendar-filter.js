//Filter
function filterByName(unitsSelector, selectNameSelector) {
    
    const selector = document.querySelector(selectNameSelector);
    selector.addEventListener('change', () => {
        const meetingFields = document.querySelectorAll(unitsSelector);
        console.log(meetingFields.length);
        meetingFields.forEach(item => {
            if(selector.value === 'All') {
                item.classList.remove('hide', 'show');
                item.classList.add('show')
                return true;
            }
            item.classList.remove('show', 'hide');
            item.classList.add('hide');
            if(item.classList.contains(selector.value)) {
                
                item.classList.remove('hide');
                item.classList.add('show');
            }
        });
    });    
}
export default filterByName;