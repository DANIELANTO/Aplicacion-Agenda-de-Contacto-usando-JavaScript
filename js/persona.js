class Person{
    constructor(name, phoneNumber){
        this._name = name;
        this._phoneNumber = phoneNumber;
    }

    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get phoneNumber(){
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber){
        return this._phoneNumber;
    }
}