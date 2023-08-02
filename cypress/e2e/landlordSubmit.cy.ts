describe('A landlord should be able to submit a property, with feedback', () => {
  it('should attempt to submit an empty form and not be able to submit', () => {
    cy.visit('/add-listing')
    cy.get('[data-testid="flowbite-card"] button[type="submit"]').click()
    cy.url().should('include', '/add-listing')
  })
  //     it('should submit a valid form and be able to submit', () => {
  //         cy.visit('/add-listing')
  //         // checkbox
  //         cy.get('input[type="checkbox"]').check()
  //         // // radio
  //         // cy.get('input[type="radio"]').check()

  //         // // select
  //         // cy.get('input[type="select"]').select(0)

  //         // text
  //         cy.get('input[type="text"]').each(($el) => {cy.wrap($el).type('test')})
  //         // number
  //         cy.get('input[type="number"]').each(($el) => {cy.wrap($el).type('2')})

  //         // files
  //         // cy.get('#floor_plans[type="file"]').selectFile(['cypress/images/jpgTest.jpg', 'cypress/images/pdfTest.pdf'])
  //         // cy.get('#property_video[type="file"]').selectFile('cypress/images/movTest.mov')
  //         // cy.get('#property_images[type="file"]').selectFile('cypress/images/pngTest.png')
  //         // cy.get('#epcCertificate[type="file"]').selectFile('cypress/images/pdfTest.pdf')

  //         // submit
  //         cy.get('[data-testid="flowbite-card"] button[type="submit"]').click()

  //         // if successful it will redirect
  //         cy.url().should('include', '/listings')
  //     })
  //     // it('should display an error message or indicate that something went wrong', () => {
  //         // button should say try again rather than advertise listings
  //     // })
})

// describe('Only a landlord should be able to land on the add-listings page', () => {

// })

// describe('Should throw an error if a landlord tries to submit a property where either required fields are missing, or supabase couldnt connect', () => {

// })
