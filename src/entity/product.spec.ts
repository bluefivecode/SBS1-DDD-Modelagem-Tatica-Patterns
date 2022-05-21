describe("Product unit tests", () => {

    expect(() => {
        const product = new Product("", "Product 1", 100);
        
    }).toThrowError("id is required");
    
});