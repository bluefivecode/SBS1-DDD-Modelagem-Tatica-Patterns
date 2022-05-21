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
        const item1 = new OrderItem("i1", "Item 1", 100);
        const item2 = new OrderItem("i2", "Item 2", 200);
        const order1 = new Order("123", "123", [item1]);
        let total = order1.total();
        
        expect(total).toBe(100);
        
        const order2 = new Order("123", "123", [item1, item2]);
        total = order2.total();
        expect(total).toBe(300);
    });
});