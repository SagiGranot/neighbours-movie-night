describe('MovieTable', () => {
  before(() => {
    cy.exec('npm start');
  });

  beforeEach(() => {
    cy.intercept('GET', 'https://jsonmock.hackerrank.com/api/movies/search/*').as('getMovies');
    cy.visit('/');
    cy.wait('@getMovies');
  });

  it('renders correctly', () => {
    cy.get('h1').should('contain', 'Movies search')
    cy.get('input[name=movies-search]').should('exist');
    cy.get('.MuiDataGrid-root').should('exist');
  });

  it('displays movies data', () => {
    cy.get('.MuiDataGrid-virtualScroller').find('.MuiDataGrid-row').should('have.length.gt', 0);
  });

  it('filters movies data', () => {
    cy.get('input[name=movies-search]').type('Spiderman');
    cy.get('.MuiButton-root').click();
    cy.wait('@getMovies');
    cy.get('.MuiDataGrid-virtualScroller').find('.MuiDataGrid-row').should('have.length.gt', 0);
  });
});