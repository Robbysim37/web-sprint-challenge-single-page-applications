describe("pizza test", () => {
    it("visits pizza site", () => {
        cy.visit("http://localhost:3000/")
        cy.contains("Order Now!").click()
        cy.get("#name-input").type("Robert")
        cy.get("#size-dropdown").select("small")
        cy.get("#pepperoni").check()
        cy.get("#bacon").check()
        cy.get("#blackOlives").check()
        cy.get("#order-button").click()
    })
})