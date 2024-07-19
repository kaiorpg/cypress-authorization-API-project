/// <reference types="cypress"/>


describe('Update Booking', () => {

    let token = ''
    let bookingId = ''

    before("Login", () => {
        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            body: {
                "username": "admin",
                "password": "password123"
            }
        }).then((response) => {
            token = response.body.token
            expect(response.status).to.eq(200)
            console.log('token: ' + token)
        })


    })

    beforeEach('Create Booking', () => {

        cy.request({
            method: 'POST',
            url: 'https://restful-booker.herokuapp.com/booking',
            body: {

                "firstname": "Kaio Rafael",
                "lastname": "Perdigão de Castro",
                "totalprice": 999,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-06-23",
                    "checkout": "2024-06-29"
                },
                "additionalneeds": "Breakfast"

            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            console.log('bookingId: ' + bookingId)
            expect(response.body.bookingid).to.be.a('number')
            expect(response.body.booking.totalprice).to.be.eq(999)
            bookingId = response.body.bookingid
            cy.log('Booking Data:', response.body.bookingdates);
        })
    })

    it('Update Booking', () => {
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/' + bookingId,
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Cookie': `token=${token}`,
                failOnStatusCode: false,
            },
            body: {
                "firstname": "Kaio Rafael",
                "lastname": "Perdigão de Castro",
                "totalprice": 3000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-23-06",
                    "checkout": "2024-30-06",
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.totalprice).to.be.eq(3000)
            expect(response.body.firstname).to.be.eq('Kaio Rafael')
            expect(response.body.lastname).to.be.eq('Perdigão de Castro')
            expect(response.body.depositpaid).to.be.eq(true)
            
            console.log(response.body)
            expect(response.body.additionalneeds).to.be.eq('Breakfast')
            console.log('status code: ' + response.status)
            
        })
    })
    it('Update Booking without token', () => {
        cy.request({
            method: 'PUT',
            url: 'https://restful-booker.herokuapp.com/booking/' + bookingId,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
            },
            body: {
                "firstname": "Kaio Rafael",
                "lastname": "Perdigão de Castro",
                "totalprice": 3000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-23-06",
                    "checkout": "2019-30-06"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response_without_token) => {
            expect(response_without_token.status).to.eq(403)
            console.log('status code: ' + response_without_token.status)
        })
    })
    it('Update Booking with invalid token', () => {
        cy.request({
            method: 'PUT',
            url: `https://restful-booker.herokuapp.com/booking/$(bookingId)`,
            failOnStatusCode: false,
            headers: {
                'Content-Type': 'application/json',
                "Accept": "application/json",
                'Cookie': 'token=tokenkaio123',

            },
            body: {
                "firstname": "Kaio Rafael",
                "lastname": "Perdigão de Castro",
                "totalprice": 4000,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": "2024-23-06",
                    "checkout": "2019-30-06"
                },
                "additionalneeds": "Breakfast"
            }
        }).then((response) => {
            expect(response.status).to.eq(403)
        })
    })
})