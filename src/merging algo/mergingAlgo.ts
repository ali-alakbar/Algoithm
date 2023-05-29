



const mergeSort = (arr: number[], start: number, end: number): void => {
  if (start < end - 1) {
    // if start = end .. that means that there's only one item in the list.
    // As long as start is smaller than end, there's more than one item in the list
    // well, if there's more than one item in the list, find the list mid length and split the list again
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, mid, end);
    mergeSort(arr, start, mid);
    merging(arr, start, mid, end);
  }
};

const merging = (
  arr: number[],
  start: number,
  mid: number,
  end: number
): void => {
  const leftArr = arr.slice(start, mid);
  const rightArr = arr.slice(mid, end);

  let i = 0;
  let j = 0;
  let k = start;

  while (i < leftArr.length && j < rightArr.length) {
    // if both of the lists are still not finished or if the loop is not done with both of the lists, then go to if condition
    // did the items of the left array got compared with all the items in the right array?
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  // Is there any items left in leftArr
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
  // Is there any items left in rightArr
  while (j < rightArr.length) {
    arr[k] = rightArr[j];
    j++;
    k++;
  }
};

let originalArray: number[] = [54, 21, 6, 2, 86, 11, 4, 33];

console.log("Before:: ", originalArray);
mergeSort(originalArray, 0, originalArray.length);
console.log("After:: ", originalArray);
