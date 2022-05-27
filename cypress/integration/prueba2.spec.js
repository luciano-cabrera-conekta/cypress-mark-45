describe('Login', () => {
  it('Login through Google', () => {
    const username = Cypress.env('GOOGLE_USER')
    const password = Cypress.env('GOOGLE_PW')
    const loginUrl = Cypress.env('SITE_NAME')
    const cookieName = Cypress.env('COOKIE_NAME')
    const socialLoginOptions = {
      username,
      password,
      loginUrl,
      headless: true,
      logs: false,
      loginSelector: 'a[href="/auth/auth0/google-oauth2"]',
      postLoginSelector: '.account-panel'
    }

    return cy.task('GoogleSocialLogin', socialLoginOptions).then(({cookies}) => {
      cy.clearCookies()

      const cookie = cookies.filter(cookie => cookie.name === cookieName).pop()
      if (cookie) {
        cy.setCookie(cookie.name, cookie.value, {
          domain: cookie.domain,
          expiry: cookie.expires,
          httpOnly: cookie.httpOnly,
          path: cookie.path,
          secure: cookie.secure
        })

        Cypress.Cookies.defaults({
          preserve: cookieName
        })
      }
    })
  })
})