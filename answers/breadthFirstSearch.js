const breadthFirstSearch = (graph, [curr, ...rest]=graph['you']) => {
  if (!curr) return null // no more items in array
  if (curr.slice(-1) === 'm') return curr  // is mango seller

  return breadthFirstSearch(graph, [...rest, ...graph[curr]])
}

// Imperative
// const breadthFirstSearch = (graph) => {
//   const sellers = graph['you']
//   let seller = null
//
//   while (!seller && sellers.length) {
//     const curr = sellers.shift()
//     const relations = graph[curr]
//
//     if (relations.length) {
//       for (let name of relations) {
//         if (name.slice(-1) === 'm') { // is mango seller
//           seller = name
//         }
//         sellers.push(name)
//       }
//     }
//   }
//   return seller
// }

const graph = {
  'you': ['bob', 'alice', 'claire'],
  'bob': ['anuj', 'peggy'],
  'alice': ['peggy'],
  'claire': ['thom', 'jonny'],
  'anuj': [],
  'peggy': [],
  'thom': [],
  'jonny': []
}

console.log(breadthFirstSearch(graph))
