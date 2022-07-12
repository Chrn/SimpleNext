describe('empty spec', () => {
	it('passes', () => {
		cy.visit('http://localhost:3000');
		cy.get('.MuiListItem-root:nth-child(1) .MuiTypography-root').click();
		cy.get('.MuiListItem-root:nth-child(2) .MuiTypography-root').click();
		cy.get('.MuiListItem-root:nth-child(4) .MuiTypography-root').click();
		cy.url().should('include', '/details');
	});
});
