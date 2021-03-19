class DataModel {
    constructor() {
        this.data = [];
    }

    getAll() {
        return this.data;
    }

    getById(id) {
        for(let x =0; x<this.data.length; x++){
            if(this.data[x].id === id)
            return this.data[x];
        }
            return null;
    }

    save(obj) {
        if (this.validate(obj)) {
            this.data.push(obj);
            return true;
        }
        return false;
    }

    // updates the data with the obj if the specified id is found
    update(obj, id) {
        for(let i=0; i<this.data.length; i++){
            if(this.data[i].id === id){
                for( var prop in obj){
                   this.data[i][prop] = obj[prop]; 
                }
                return true;
            }
           
        } 
        return false;       

    }

    // deletes objects with the specified id;
    delete(id) {
        for(let i=0; i<this.data.length; i++){
            if(this.data[i].id === id){
                this.data.splice(this.data.indexOf(this.data[i]), 1);
                return true;
            }     
        } 
        return false;   
    }

    // this method will be overriden in the sub classes
    validate(obj) {
        return false;
    }
}

// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = DataModel;