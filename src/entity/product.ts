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

    validate(): boolean{
        if(this._id.length === 0){
            throw new Error("id is required");
        }
        return true;
    }

}