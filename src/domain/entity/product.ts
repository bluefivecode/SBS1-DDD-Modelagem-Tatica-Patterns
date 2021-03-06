export default class{

    private _id: string = "";
    private _name: string = "";
    private _price: number = 0;

    constructor(id: string, name: string, price: number){
        this._id = id;
        this._name = name;
        this._price = price;
        this.validate();
    }

    get id(): string{
        return this._id;
    }

    changeName(name: string): void{
        this._name = name;
        this.validate();
    }


    get name(): string{
        return this._name;
    }

    changePrice(price: number): void{
        this._price = price;
        this.validate();
    }

    get price(): number{
        return this._price;
    }

    validate(): boolean{
        if(this._id.length === 0){
            throw new Error("id is required");
        }
        
        if(this._name.length === 0){
            throw new Error("name is required");
        }

        if(this._price < 0){ 
            throw new Error("price must be greater than zero");
        }
        return true;
    }

}