(() => {

  /* Excercises */

  /* First excercise */
  
  let numbers = [1, 2, 3, 4, 5];
  
  /* Multiplique los numeros del arreglo por 5 */

  let multipliedNumbers = numbers.map(multiplication);

  function multiplication (number) {
    return number * 5;
  }

  console.log("First excercise result:", multipliedNumbers);

  /*Resultado esperado: [5, 10, 15, 20, 25] */

  /* First excercise */

  /* Second excercise */

  let names = ["Jhosep", "Daniel", "Rodrigo", "Veronica"];

  /* Ordernar los nombres alfabeticamente */

  let sortedNames = names.sort();

  console.log("Second excercise result:", sortedNames);

  /* Resultado esperado: ["Daniel", "Jhosep", "Rodrigo", "Veronica"] */

  /* Second excercise */

  /* Thrid excercise */

  const data = ['a', 'b', 'z', 'r', 'a', 'c', 'r', 'a'];

  /* Dado un arreglo, crear otro sin letras repetidas */

  const removeDuplicates = data.filter((character, index) => {
    return data.indexOf(character) === index;
  });

  console.log("Third excercise result:", removeDuplicates);

  /* Resultado esperado: ['a', 'b', 'z', 'r', 'c'] */

  /* Thrid excercise */

  /* Fourth excercise */

  const largeWord = "abcdabcdABCD";

  /* Dado un string mostrar cuantas veces se repite cada letra*/

  const countRepeted = {};

  largeWord.split('').forEach(letter => {
    countRepeted[letter] = (countRepeted[letter] || 0) + 1;
  });

  console.log("Fourth excercise result:", countRepeted);

  /* Resultado: 
    {
      a: 2,
      b: 2,
      c: 2,
      d: 2,
      A: 1,
      B: 1,
      C: 1,
      D: 1
    }
  */

  /* Fourth excercise */

})();
