import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {

    it("Should throw error when id is empty", () => {

        expect(() => {
            let order = new Order("", "123", []);
        }).toThrowError("id is required");
    });

    it("Should throw error when customerId is empty", () => {

        expect(() => {
            let order = new Order("123", "", []);
        }).toThrowError("customerId is required");
    });

    it("Should throw error when items is empty", () => {

        expect(() => {
            let order = new Order("123", "123", []);
        }).toThrowError("Item qtd must be greater than 0");
    });

    it("Should return total", () => {
        const item1 = new OrderItem("i1", "Item 1", 100, "p1", 2);
        const item2 = new OrderItem("i2", "Item 2", 200, "p2", 2);
        const order1 = new Order("123", "123", [item1]);
        let total = order1.total();
        
        expect(total).toBe(200);
        
        const order2 = new Order("123", "123", [item1, item2]);
        total = order2.total();
        expect(total).toBe(600);
    });

    it("should throw error if the item quantity is less or equal than 0", () => {
   
        expect(() => {
            const item1 = new OrderItem("i1", "Item 1", 100, "p1", 0);
            const order = new Order("o1", "c1", [item1]);
    
        }).toThrowError("Item qtd must be greater than 0");
    });
});