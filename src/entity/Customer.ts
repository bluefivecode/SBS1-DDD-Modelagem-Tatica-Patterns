class Customer {
 
    _id: string;
    _name: string = "";
    _address: string = "";
    _active: boolean = true;

    constructor(id: string, name: string) {
        this._id = id;
        this._name = name;
        this.validate();
    }

    validate() {
        if (this._name.length ===0)     
            throw new Error("Customer name is required");

        if (this._address.length === 0)
            throw new Error("Customer address is required");
    }


    changeName(name: string) {
        this._name = name;
        this.validate();
    }

    activate() {
        this._active = true;
    }

    deactivate() {
        this._active = false;
    }

}