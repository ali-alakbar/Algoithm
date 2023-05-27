const array = [10, 3, 5, 65, 7, 1,2,3,4,5,6,7,8,9];
array.sort()

for (let i = 1; i <= array.length - 1; i++) { // n
  let key = array[i]; // 1
  for (let j = i - 1; j >= 0; j--) { // n
    if (array[j] > array[j + 1]) { // 1
      array[j+1] = array[j] // 1
      array[j] = key // 1
    }
  }
}

// n + 1 + n + 1 +  1 + 1 ==> 
// f(n) = n*n + 1 + 1 + 1 + 1
// f(n) = n^2 + 4
// f(n) = O(n^2) as n-> infinity
// Big-O notation (time complexity) = O(n^2)

console.log(array)
 