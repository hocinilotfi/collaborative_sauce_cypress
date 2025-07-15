describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
    expect(0).to.be.equal(0)
  })
})