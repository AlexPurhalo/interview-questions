// Declarative #1
const sum = arr => arr.reduce((acc, num) => acc+num)

// Declarative #2
// const sum = ([fir, sec, ...rest]) => { 
//   if (!sec) return fir
//   return sum([fir+sec, ...rest]) 
// }

// Imperative #1
// const sum = (arr) => { 
//   let sum = 0
//   while (arr.length) { sum += arr.shift() }
//   return sum
// }


// Imperative #2
// const sum = (arr) => {
//   let sum = 0
//   for (const num of arr) {
//     sum += num
//   }
//   return sum
// }

console.log(sum([1, 2, 3, 4])) // 10
