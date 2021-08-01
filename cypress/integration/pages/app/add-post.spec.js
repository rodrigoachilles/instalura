// eslint-disable-next-line spaced-comment

import { BASE_URL } from '../../../../src/infra/env';

describe('FormUploadImage', () => {
  const photo =
    'https://citizengo.org/sites/default/files/styles/large/public/images/test_3.png';

  beforeEach(() => {
    cy.login(`/app/profile`);
  });

  afterEach(() => {
    cy.logout();
  });

  describe('when fill input url image', () => {
    it('and cannot go forward', () => {
      cy.get('button[name="addPost"]').click();
      cy.get('div[id="formUploadImagem"]').should('exist');
      cy.get('input[name="photoUrl"]').type('/invalid_image.png');
      cy.get('button[name="avancar"]').should('exist').should('be.disabled');
    });

    describe('and can go forward, select a filter and submit form', () => {
      beforeEach(() => {
        cy.get('button[name="addPost"]').click();
        cy.get('div[id="formUploadImagem"]').should('exist');
        cy.wait(1000);

        // TODO Problema com o 'paste' da foto
        cy.get('input[name="photoUrl"]')
          .focus()
          .clear()
          .invoke('val', photo.substring(0, photo.length - 1))
          .trigger('blur');
        cy.get('input[name="photoUrl"]')
          .focus()
          .type(photo.substring(photo.length - 1, photo.length));

        cy.get('button[name="avancar"]')
          .should('exist')
          .should('not.be.disabled');
        cy.get('button[name="avancar"]').click();

        cy.get('form').should('be.visible');
        cy.get('div[id="slider"]').should('exist');

        cy.get('form[name="selectFilter"] > figure > img')
          .should('exist')
          .invoke('attr', 'src')
          .should('eq', photo);
        cy.get('button[name="postar"]')
          .should('exist')
          .should('not.be.disabled');
      });

      it('success creating post', () => {
        cy.intercept(
          {
            method: 'POST',
            url: `${BASE_URL}/api/posts`,
          },
          { data: {} },
        ).as('createPost');

        cy.get('button[name="postar"]').click();

        cy.wait('@createPost').then(() => {
          cy.get('div[id="success"]').should('exist').should('be.visible');
          cy.get('span').contains('Imagem enviada com sucesso!');
        });
      });

      it('fail creating post', () => {
        cy.intercept(
          {
            method: 'POST',
            url: `${BASE_URL}/api/posts`,
          },
          new Error(),
        ).as('createPost');

        cy.get('button[name="postar"]').click();

        cy.wait('@createPost').then(() => {
          cy.get('div[id="error"]').should('exist').should('be.visible');
          cy.get('span').contains('Erro ao enviar a imagem!');
        });
      });
    });
  });
});
