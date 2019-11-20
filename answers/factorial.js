// Declarative
const factorial = (num) => {
  if (num === 1) return num
  return num * factorial(num-1)
}

// Imperative
// const factorial = (num) => {
//   let res = num
//   while (num > 1) {
//     num -= 1
//     res *= num
//   }
//   return res
// }

console.log(factorial(4))
