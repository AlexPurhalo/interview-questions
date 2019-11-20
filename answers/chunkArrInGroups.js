const chunkArrayInGroups = (arr, n) => {
  if (arr.length <= n) return [arr]
  return [arr.slice(0, n), ...chunkArrayInGroups(arr.slice(n), n)]
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)
