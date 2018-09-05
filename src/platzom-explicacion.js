/** // para decirle que lo que se exporta por defecto esla función platzom tenemos que
 * agreagar la palabra default, si tuvieramos que exportar otra cosa lo podríamos hacer
 * exports function platzom() lo haríamos de la siguiente forma:
 * import {platzom} from 'platzom' // lo que estamos diciendo es que queremos importar
 * la función platzom del módulo platzom, en cambio si lo ponemos exports.default platzom()
 * No es necesario colocar las llaves
 * import platzom from platzom // porque lo que se exporta por default cuando lo importemos
 * va a ser la función.
 */

exports.default = platzom

/** Ahora lo que vamos a hacer es poder crear de alguna manera, ese archivo que si vamos a
 * distribuir, ese archivo que es compatible con todos los entornos de los navegadores, para
 * eso vamos a utilzar babeljs
 *
 * Las depencias de desarrollo no son dependencias que la aplicación necesita para ejecutar cosas
 * si no que son librerías que el módulo va a necesitar para poder digamos que compilarse o transpilarse
 * o generar ese archivo distribuible.
 *
 * Los presets de babel sirven para decirle a babel que funcionalidades queremos que transpile
 * porque podemos apuntar a transpilar código que esté escrito en ES2015 o que esté escrito en
 * ES2016, incluso funcionalidades que ni siquiera están incluidas en ES2016 pero que ya
 * fueron desarrolladas
 */

function platzom(str) {
  let translation = str

  // Si la palabra original es un palíndromo,
  // ninguna regla anterior cuenta y se devuelve
  // la misma palabra intercalando mayúsculas y minúsculas

  const reverse = (str) => str.split('').reverse().join('')

  function minMay(str) {
    const length = str.length
    let translation = ''
    let capitalize = true
    for (let i = 0; i < length; i++) {
      const char = str.charAt(i)
      translation += capitalize ? char.toUpperCase() : char.toLowerCase()
      capitalize = !capitalize
    }

    return translation
  }

  if (str == reverse(str)) {
    return minMay(str)
  }

  // Si la palabra termina en "ar", se le quitan esos dos caracteres
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2)
  }

  // Si la palabra inicia con Z, se le añade "pe" al final
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'
  }

  // Si la palabra traducida tiene 10 o más letras,
  // se debe partir a la mitad y unir con un guión del medio
  const length = translation.length
  if (length >= 10) {
    const firstHalf = translation.slice(0, Math.round(length / 2))
    const secondHalf = translation.slice(Math.round(length / 2))
    translation = `${firstHalf}-${secondHalf}`
  }

  return translation
}
// estas llamadas no hacen parte de nuestro módulo

// console.log(platzom("Programar")) // Program
// console.log(platzom("Zorro")) // Zorrope
// console.log(platzom("Zarpar")) // Zarppe
// console.log(platzom("abecedario")) // abece-dario
// console.log(platzom("sometemos")) // SoMeTeMoS
