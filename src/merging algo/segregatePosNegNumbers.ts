/*

  sorting the negitive number and positive number without paying attention to their orders. for example:
  array = [1,2,-2,4,-8,11]
  sortedArray = [-2, -8, 1, 2, 4, 11]


*/

const segregate = (arr: number[], low: number, high: number) => {
  if (low < high - 1) {
    let midPoint = Math.floor((low + high) / 2);
    segregate(arr, low, midPoint);
    segregate(arr, midPoint, high);
    merge(arr, low, high, midPoint);
  }
};

const merge = (arr: number[], low: number, high: number, midPoint: number) => {
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
  // remaining numbers
  while (i < arr_left.length) {
    arr[k] = arr_left[i];
    i++;
    k++;
  }

  while (j < arr_right.length) {
    arr[k] = arr_right[j];
    j++;
    k++;
  }
};

const originalArr = [7, 8, -99, -3, 1, 11, 17, -120, 32, -4, 2, -65];
segregate(originalArr, 0, originalArr.length);
console.log("After:: ", originalArr);
