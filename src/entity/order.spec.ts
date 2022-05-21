import Order from "./order";

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
});