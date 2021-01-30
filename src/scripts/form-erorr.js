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
    
    if(data.inpEve === '') {
        throw new ValidationError("Field 'Name of the event' is empty!");
    }
    if(data.inpEve.length > 100) {
        throw new ValidationError("'Name of the event' is too long!");
    }
    if(data.cheUsr.length === 0) {

        throw new ValidationError("Field 'Participants' is empty!");
    }
    if(keys.indexOf(data.idName) !== -1) {
        throw new ValidationError("Time slot is already booked!");
    } else {
        return true;
    }

}

export {readData};