var request = require('request');
var { expect } = require('chai');
var urlBase = 'http://localhost:3000';    

// Teste para conversão dos Números decimais para Romanos
describe('API - RomanController', () => {

  it("Test 1 => Invalid Field ", (done) => {
    const number = '';
    const expected =  'Os valores devem ser numéricos entre 1 e 3999';
    request(
        {
            url: `${urlBase}/convert`,
            method :"POST",
            headers : {
                "content-type": "application/json",
            },
            body: {number: number},
            json: true
        },
        (error, res, body) => {

            var _body = {};
            try {
                _body = body;
            } catch (err) {
                _body = {};   
            }

            expect(res.statusCode).to.equal(400);
            
            if ( expect(_body.errors[0]).to.have.property('msg') ) {
                expect(_body.errors[0].msg).to.equal(expected, `Roman: ${_body.errors[0].msg} !== Esperado: ${expected}`);
            }

            expect(res.statusCode).to.equal(400);
            
            done();
          }
      );
  });

  it("Test 2 => Number \'\'", (done) => {
    const number = '';
    const expected = 'Os valores devem ser numéricos entre 1 e 3999';
    request(
        {
            url: `${urlBase}/convert`,
            method :"POST",
            headers : {
                "content-type": "application/json",
            },
            body: {number: number},
            json: true
        },
        (error, res, body) => {

            var _body = {};
            try {
                _body = body;
            } catch (err) {
                _body = {};   
            }

            expect(res.statusCode).to.equal(400);
            
            if ( expect(_body.errors[0]).to.have.property('msg') ) {
                expect(_body.errors[0].msg).to.equal(expected, `Roman: ${_body.errors[0].msg} !== Esperado: ${expected}`);
            }

            expect(res.statusCode).to.equal(400);
            
            done();
          }
      );
  });

  it("Test 3 => Number 4500", (done) => {
    const number = 4500;
    const expected = 'Os valores devem ser numéricos entre 1 e 3999';

    request(
        {
            url: `${urlBase}/convert`,
            method :"POST",
            headers : {
                "content-type": "application/json",
            },
            body: {number: number},
            json: true
        },
        (error, res, body) => {

            var _body = {};
            try {
                _body = body;
            } catch (err) {
                _body = {};   
            }

            expect(res.statusCode).to.equal(400);
            
            if ( expect(_body.errors[0]).to.have.property('msg') ) {
                expect(_body.errors[0].msg).to.equal(expected, `Roman: ${_body.errors[0].msg} !== Esperado: ${expected}`);
            }

            done();
          }
      );
  });
    
    it("Test 4 => Number 9", (done) => {
        const number = 9;
        const expected = 'IX';

        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }
                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it('Test 5 => Number 32', (done) => {
        const number = 32;
        const expected = 'XXXII';
    
        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });
    
    it("Test 6 => Number 365", (done) => {
        const number = 365;
        const expected = 'CCCLXV';
        
        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });
    
    it("Test 7 => Number 1954", (done) => {
        const number = 1954;
        const expected = 'MCMLIV';
        
        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 8 => Number 1587", (done) => {
        const number = 1587;
        const expected = 'MDLXXXVII';

        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

    it("Test 9 => Number 3365", (done) => {
        const number = 3365;
        const expected = 'MMMCCCLXV';
        
        request(
            {
                url: `${urlBase}/convert`,
                method :"POST",
                headers : {
                    "content-type": "application/json",
                },
                body: {number: number},
                json: true
            },
            (error, res, body) => {

                var _body = {};
                try {
                    _body = body;
                } catch (err) {
                    _body = {};   
                }

                expect(res.statusCode).to.equal(200);
                
                if ( expect(_body).to.have.property('Roman') ) {
                    expect(_body.Roman).to.equal(expected, `Roman: ${_body.Roman} !== Esperado: ${expected}`);
                }
                done();
            }
        );
    });

});