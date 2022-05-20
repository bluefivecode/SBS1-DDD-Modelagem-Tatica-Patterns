import Customer from "./entity/customer";
import Address from "./entity/address";

let customer = new Customer("123", "Leo Fontolan");
const address = new Address("Rua Dois", 2, "12345-678", "São Paulo");

customer.address = address;
customer.activate();