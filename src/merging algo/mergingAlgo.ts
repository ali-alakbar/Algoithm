const mergeSort = (arr: number[], start: number, end: number): void => {
  if (start < end - 1) {
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
    if (leftArr[i] <= rightArr[j]) {
      arr[k] = leftArr[i];
      i++;
    } else {
      arr[k] = rightArr[j];
      j++;
    }
    k++;
  }
  while (i < leftArr.length) {
    arr[k] = leftArr[i];
    i++;
    k++;
  }
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
