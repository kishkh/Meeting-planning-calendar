class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name ="Failed to create an event."
    }
}

// Get and check JSON data
function readData(json) {
    let data = JSON.parse(json);
    let keys = Object.keys(localStorage);
    
    if(data['inp-eve'] === '') {
        throw new ValidationError("Field 'Name of the event' is empty!");
    }
    if(data['che-usr'].length === 0) {

        throw new ValidationError("Field 'Participants' is empty!");
    }
    if(keys.indexOf(data['id-name']) !== -1) {
        throw new ValidationError("Time slot is already booked!");
    } else {
        return true;
    }

}

export {readData};