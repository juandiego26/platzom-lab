const expect = require('chai').expect // requerimos el módulo chai con su método expect
const platzom = require('..').default // requerimos el módulo platzom de la carpeta (..) es para requerir el módulo que está en un nivel más arriba

/** (decribe) es una función que lo que hace es describir que tienen que hacer los tests y que
 * es lo que tienen que devolver. Recibe dos parámetros, 1- es el nombre del test
 * 2- es una función o callback que incluye todos los tests que vamos a realizar.
 *
 * El método it() es un caso de prueba recibe dos parámetros 1- es una descripción del tests y el segundo
 */

describe('#Platzom', function() {

  it('Si la palabra termina con "ar", se le quitan esas dos letras', function() { // es un caso de prueba
    const translation = platzom('Programar') // como pasariamos el parámetro para ejecutar la función
    expect(translation).to.equal('Program') // propio del API de chai, el cual expect es una función a la cual se le pasa un parámetro que es la funcionalidad que queremos probrar y como segundo to que es un getter que mejora la legibilidad de las asserciones y (equal) que es una asercion que recibe como parámetro la expresión y puede recibir un mesaje
  })

  it('Si la palabra inicia con Z, se le añade "pe" al final', function() { // es un caso de prueba
    const translation = platzom('Zorro')
    const translation2 = platzom('Zarpar')

    expect(translation).to.equal('Zorrope')
    expect(translation2).to.equal('Zarppe')
  })

  it('Si la palabra traducida tiene 10 o más letras, se debe partir en dos por la mitad y unir con un guión medio', function() {
    const translation = platzom('abecedario')
    expect(translation).to.equal('abece-dario')
  })

  it('Por último, si la palabra original es un palíndromo, ninguna regla anterior cuenta y se devuelve la misma palabra pero intercalando letras mayúsculas y minúsculas', function() {
    const translation = platzom('sometemos')
    expect(translation).to.equal('SoMeTeMoS')
  })

})