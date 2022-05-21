import Customer from "./customer";

describe("Customer unit tests", () => {

    it("should throw error when id is empty", () => {
        
        expect(()=> {
            let customer = new Customer ("", "John");
        }).toThrowError("Customer id is required");
    });

    it("should throw error when name is empty", () => {
        expect(()=> {
            let customer = new Customer ("123", "");
        }).toThrowError("Customer name is required");
    });

    it("should change name", () => {

        let customer = new Customer ("123", "John");
        customer.changeName("Jane");
        expect(customer.name).toBe("Jane");
    });
})