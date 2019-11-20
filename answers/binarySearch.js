const binarySearch = (arr, item, [low=0, high=arr.length-1]=[]) => {
  const mid = Math.floor((low + high)/2)

  if (low > high) return -1 // is overshooting the range?
  if (arr[mid] === item) return mid // is item found?

  return binarySearch(arr, item, [
    item > arr[mid] ? mid+1 : low,
    item < arr[mid] ? mid-1 : high
  ])
}

console.log(binarySearch([1, 5, 8, 9, 10], 9))
