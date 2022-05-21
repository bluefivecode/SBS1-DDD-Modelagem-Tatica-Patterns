import Address from "./address";
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

    it("should activate customer", () => {

        const customer = new Customer ("1", "Customer 1");
        const address = new Address("Street 1",123, "12345-678", "São Paulo");
        customer.address = address;
        customer.activate();

        expect(customer.isActive()).toBe(true);
    });

    it("should deactivate customer", () => {

        const customer = new Customer ("1", "Customer 1");
        customer.deactivate();

        expect(customer.isActive()).toBe(false);
    });
})