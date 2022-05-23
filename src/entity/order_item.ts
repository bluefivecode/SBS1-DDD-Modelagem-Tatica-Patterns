export default class OrderItem{

    private _id: string = "";
    private _name: string = "";
    private _price: number = 0;

    constructor(id: string, name: string, price: number){
        this._id = id;
        this._name = name;
        this._price = price;
    }
}