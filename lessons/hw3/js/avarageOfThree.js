/* 
    Trying to understand the usage of arrow functions used (for future). And I thought that I will use it here and it will 
    gave my avarageOfThree.js the only context for avarageOfThreeResult. Also it will have implicit return
    w/o using return keyword
*/

const a = parseInt(prompt("Enter first digit"))
const b = parseInt(prompt("Enter second digit"))
const c = parseInt(prompt("Enter third digit"))

const avarageOfThreeResult = () => (a + b + c) / 3

alert(`The avarage of three (${a}, ${b}, ${c}) going to be ${avarageOfThreeResult()}`)