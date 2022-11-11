// 1 - Number
console.log(typeof 2)
console.log(typeof 5.14)
console.log(typeof 2)

// 2 - ops. aritméticas
console.log(2 + 4)
console.log(10 - 6)
console.log(2 * 8)
console.log(4 / 4)
console.log(4 % 2)

// 3 - Special numbers
console.log(typeof Infinity)
console.log(typeof -Infinity)
console.log(typeof 12 * "adb" ) 
console.log(typeof NaN)

// 4 - Strings
console.log( typeof "Um texto")
console.log(typeof 'Um texto')
console.log(typeof `Um texto`)
console.log(typeof "13")

// 5 - Simnolos especiais em strings
console.log("Testando a \nquebra de linha")
console.log("Espaçamento \t de tab")

// 6/7 - concatenação / interpolação , template strings
let nome = "Alzevir"
console.log(`Olá ${nome}, tudo bem?`)
console.log(`A soma de 2 + 2 é: ${2 + 2}`)

// 8 - boolean
console.log(typeof true)
console.log(typeof false)
console.log(5 > 20)
console.log(6 > 3)

// 9 - comparações
console.log(5 <= 5)
console.log(5 < 5)
console.log(10 == 10)
console.log(10 == 9)
console.log(10 != 9)

// 10 - Idêntico
console.log(9 === "9")
console.log(9 !== "9")

// 11 - Operadores lógicos
console.log(true && true)
console.log(true && false)
console.log(5 > 2 && 2 < 10)
console.log(5 > 2 && "Alzevir" === 1)
console.log(5 > 2 || "Alzevir" === 1)
console.log(5 < 2 || 5 > 100)
console.log(!true)

// 12 - empty values
console.log(typeof null, typeof undefined)
console.log(null === undefined)
console.log(null === undefined)
console.log(null == false)
console.log(undefined == false)

// 13 - mudança de tipos
console.log(5 * null)
console.log("teste" * "opa")
console.log("10" + 1)
console.log("10" - 1)