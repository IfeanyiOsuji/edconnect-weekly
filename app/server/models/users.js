const DataModel = require('./data_model');

class User{
    constructor(id, firstname, lastname, email, password, matricNumber, program, graduationYear) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.matricNumber = matricNumber;
        this.program = program;
        this.graduationYear = graduationYear;
    }

     getFullName() {
        let name = this.firstname + " " + this.lastname;
        return name;
    }
}

class Users extends DataModel {
    // checks if email and password combination is correct
    authenticate(email, password) {
        let loginCred = this.data.filter((e) => e.email === email && e.password === password)
        if(loginCred.length === 1 && loginCred[0].email=== email && loginCred[0].password == password) 
         return true;
         else
            return false;

    }

    getByEmail(email) {
        for(let x =0; x<this.data.length; x++){
            if(this.data[x].email === email)
            return this.data[x];
        }
            return null;
    }

    getByMatricNumber(matricNumber) {
        for(let x =0; x<this.data.length; x++){
            if(this.data[x].matricNumber === matricNumber)
            return this.data[x];
        }
            return null;


    }

    validate(obj) {
        // check if none of the properties are empty
        for(var prop in obj){
            if(obj[prop] === ''|| obj[prop] ===[]){
                return false;
            }
        }
        let pass = obj.password;
        if(!(pass.length >= 7)){ // checks if password >= 7
        return false;
        }
            //to check if email and matricNumber do not already exist
        //let check = this.data.every((e) => e.email !==obj.email && e.matricNumber !==obj.matricNumber)
        let checkEmail = this.data.filter((e) => e.email === obj.email)
        if(checkEmail.length > 0){
            return false;
        }
        let checkMatric = this.data.filter((e) => e.matricNumber === obj.matricNumber)
        if(checkMatric.length > 0){
            return false;
        }
        return true;

    }
}


// Do not worry about the below for now; It is included so that we can test your code
// We will cover module exports in later parts of this course
module.exports = {
    User,
    Users
};