/// <reference types="cypress" />
/*
context('Actions', () => {

    it('.type() - type into a DOM element', () => {


   // cy.visit('https://mark45-stg.conekta.io').should('be.visible',{ timeout: 10000})

        cy.visit('https://accounts.google.com/')
        cy.get('[id=identifierId]')

        .type('auto-qa@conekta.com{enter}')
        .should('be.visible')
        
        cy.wait(2000)
        
        cy.get('input[name=password]').type('C0n3kt401!{enter}').should('be.visible')

        cy.origin('https://mark45-stg.conekta.io', () => {
              cy.visit('/')

            })
        //cy.get('[id=identifierNext]').click;
    })
    
    })


*/
const dotenv = require('dotenv').config({path: ".env"})
describe('Google', function () {
    beforeEach(function () {
     // cy.task('db:seed')
      cy.log(Cypress.env("login_url"))
      cy.loginByGoogleApi()
    })
  
    it('shows onboarding', function () {
        //cy.log(process.env.REACT_APP_GOOGLE_CLIENTID)
        cy.visit("https://mark45-stg.conekta.io/login")
        cy.get('[class=login__button]').click({force:true})
        //cy.loginByGoogleApi()
        
     // cy.contains('Get Started').should('be.visible')
    })
  })
