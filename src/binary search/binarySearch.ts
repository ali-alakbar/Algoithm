function BinSearch(arr: number[], arrLength: number, key: number) {
  let l = 0; 
  let h = arrLength; 

  while (l <= h) {
    
    let mid = Math.floor((l + h) / 2); 
    if (arr[mid] === key) {
      
      return `${key} is found in the list.`; 
    }
    if (key > arr[mid]) {
      
      l = mid + 1; 
    } else {
      h = mid - 1; 
    }
  }
  return "Not found"; 
}

let my_array: number[] = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; 

let my_length = my_array.length; 

console.log(BinSearch(my_array, my_length, 3)); 

// f(n) = log n as n -> infinity
// log n because we are not looping leanerly .. divide and conquer is under the log

