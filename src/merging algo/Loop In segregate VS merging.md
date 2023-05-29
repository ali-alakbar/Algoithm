## Loop in Segregate

The loop in the segregate problem takes the two arrays and travers through each one of them sepretally, while in the merging loop it goes through the two arrays as a whole.

# Merging algorthim
`
const leftArr = arr.slice(start, mid);
  const rightArr = arr.slice(mid, end);

  let i = 0;
  let j = 0;
  let k = start;

  while (i < leftArr.length && j < rightArr.length) {
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
`
The idea is to compare the numbers with each other and sort them based on which one is bigger and which one is smaller.

# Segregate
`
const arr_left = arr.slice(low, midPoint);
  const arr_right = arr.slice(midPoint, high);

  let i = 0;
  let j = 0;
  let k = low;

  // go through rach loop seperatlly and check if the numbers are negative
  // 1
  while (i < arr_left.length && arr_left[i] <= 0) {
    arr[k] = arr_left[i];
    i++;
    k++;
  }
  // 2
  while (j < arr_right.length && arr_right[j] <= 0) {
    arr[k] = arr_right[j];
    j++;
    k++;
  }
`
The idea here is to check each array which its numbers are smaller than zero or not.
