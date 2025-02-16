// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })



    Cypress.Commands.add('loginDux', (usuario, contraseña) => {
        cy.visit('https://erp.duxsoftware.com.ar/');
        cy.get('#formLogin [type="text"]').type(usuario);
        cy.get('#formLogin [type="password"]').type(contraseña)
        cy.get('.ui-button-text').contains('Conectarse').click()
    });


    Cypress.Commands.add('logout', () => {
        cy.get('#formMenuTopbar .profile-image ').click()
        cy.wait(3000)
        cy.get('[onclick="disconnect();"]').click( )
    })


        Cypress.Commands.add('loginTN', (email, pass) => {
            cy.visit('https://www.tiendanube.com/login',{ timeout:15000})
                cy.get('#user-mail').type(email)
                cy.get('#pass').type(pass, { force: true })
                cy.wait(3000)
                cy.get('input.btn.btn-primary.btn-lg.js-tkit-loading-button.js-ga-trigger.js-reset-password-type[name="login"]').click()
                
    });
