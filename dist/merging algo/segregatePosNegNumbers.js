"use strict";
const segregate = (arr, low, high) => {
    if (low < high - 1) {
        let midPoint = Math.floor((low + high) / 2);
        segregate(arr, low, midPoint);
        segregate(arr, midPoint, high);
        merge(arr, low, high, midPoint);
    }
};
const merge = (arr, low, high, midPoint) => {
    const arr_left = arr.slice(low, midPoint);
    const arr_right = arr.slice(midPoint, high);
    let i = 0;
    let j = 0;
    let k = low;
    while (i < arr_left.length && arr_left[i] <= 0) {
        arr[k] = arr_left[i];
        i++;
        k++;
    }
    while (j < arr_right.length && arr_right[j] <= 0) {
        arr[k] = arr_right[j];
        j++;
        k++;
    }
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
//# sourceMappingURL=segregatePosNegNumbers.js.map