import '../support/commands'

describe('BooksApp autotests', () => {
  it('Successful autorization', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy
    .contains('Добро пожаловать test@test.com')
    .should('be.visible');
  });

   it('Adding a new book to favorites', () => {
    cy.visit('/');
    cy.login('bropet@mail.ru', '123');
    cy.addNewBook(
      'Гарри Поттер',
      'Серия романов, написанная британской писательницей Дж. К. Роулинг.',
      'Дж. К. Роулинг'
    );
    cy.visit('/favorites');
    cy.get('.card-body').should('contain', 'Гарри Поттер'); 
    cy.contains('Delete from favorite').should('be.visible');
  });

  it('Deleting a book from favorite', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.visit('/favorites');
    cy.get('.card-body').should('contain', 'Гарри Поттер');
    cy.contains('Delete from favorite').click();
    cy.contains('Гарри Поттер').should('not.exist');
  });

 it('Adding a book to favorites from booklist', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.get('.card-body').should('contain', 'Гарри Поттер'); 
    cy.get('.card-body').should('contain', 'Гарри Поттер'); 
    cy.contains('Delete from favorite').should('be.visible');
  });
});