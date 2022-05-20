import Address from "./address";

export default class Customer {
 
    _id: string;
    _name: string = "";
    _address!: Address
    _active: boolean = false;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length ===0)     
            throw new Error("Customer name is required");

        if (this._address === undefined)
            throw new Error("Customer address is required");
    }


    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        if(this._address === undefined){
            throw new Error("Address is mandatory to activate a Customer"); 
        }
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

    set address(address: Address) {
        this._address = address;
    }

}