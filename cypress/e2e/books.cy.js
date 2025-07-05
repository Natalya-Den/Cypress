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
    cy.addNewBookToFavorite(
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
    cy.addNewBookToFavorite(
      'Волшебник изумрудного города',
      'Сказка',
      'А. Волков'
    );
    cy.deleteFromFavorite('Волшебник изумрудного города');
    cy.contains('Волшебник изумрудного города').should('not.exist');
  });

 it('Adding a book to favorites from booklist', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.addNewBookToFavorite(
      'Властелин колец',
      'Фантастика',
      'Джон Рональд Руэл Толкин'
    );
    cy.deleteFromFavorite('Властелин колец');
    cy.get('.card-body').should('contain', 'Властелин колец'); 
    cy.contains('Delete from favorite').should('be.visible');
  });
});