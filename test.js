test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')

    // utilizo la function de la forma como se espera que funcione
    const dollars = fromEuroToDollar(3.5)

    // is 1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
    const expected = 3.5 * 1.2; 

    // hago mi comparacion (la prueba)
    expect(expected).toBe(dollars);
})


// DollarToYen
test("One dollar should be 106.58 yens", function(){

    const { fromDollarToYen } = require('./app.js')


    const yens = fromDollarToYen(2.5)

    // is 1 dollar son 106.58, entonces 2.5 dollar deberian ser = (2.5 * 127.9)
    const expected = 2.5 * 127.9; 


    expect(expected).toBe(yens);
})


// YenToPound

test("One pond should be 0.0062", function(){

    const { fromYenToPound } = require('./app.js')


    const pounds = fromYenToPound(3.5)

    // is 1 yen son 0.0062, entonces 2.5 dollar deberian ser = (2.5 * 0.0062)
    const expected = 3.5 * 0.8; 


    expect(expected).toBe(pounds);
})

