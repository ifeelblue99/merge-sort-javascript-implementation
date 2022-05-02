/*
  merge sort implementation
*/

const data = [55, 4, 33, 2, 11, 0]

function mergeSort(arr) {
  
  if(arr.length < 2) return arr 
  
  const [left, right] = splitArray(arr)
  
  let l = mergeSort(left)
  let r = mergeSort(right)

  return mergeArray(l, r)
}

function splitArray(arr) {
  const mid = Math.floor(arr.length/2)
  return [arr.splice(0,mid), arr]
}

function mergeArray(arr1, arr2) {
  const mergedArr = []
  
  while(arr1.length && arr2.length) {
    if(arr1[0]>arr2[0]) {
      mergedArr.push(arr2.shift())
    } else {
      mergedArr.push(arr1.shift()) 
    }
  }
  // insert remaining elements to the end 
  arr2.length && mergedArr.push(...arr2)
  arr1.length && mergedArr.push(...arr1)

  return mergedArr
}
// run code
console.log("sort.",mergeSort(data));
