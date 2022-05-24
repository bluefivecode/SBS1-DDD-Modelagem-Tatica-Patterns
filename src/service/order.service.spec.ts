import Product from "../entity/product";

describe("Product service unit test", () => {

    it("should change the prices of all products", () => {

        const product1 = new Product("product 1", "Product 1", 10);
        const product2 = new Product("product 2", "Product 2", 20);

        const products = [product1, product2];

        ProductService.changePrices(products, 10);

        expect(product1.price).toBe(20);
        expect(product2.price).toBe(40);
    });
});