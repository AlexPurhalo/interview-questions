const breadthFirstSearch = () => {

}

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

console.log(breadthFirstSearch(graph)) // thom
// find a "Mango Seller", a person which name ends by "m". "thom" in our case
