"use strict";
const array = [10, 3, 5, 65, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9];
array.sort();
for (let i = 1; i <= array.length - 1; i++) {
    let key = array[i];
    for (let j = i - 1; j >= 0; j--) {
        if (array[j] > array[j + 1]) {
            array[j + 1] = array[j];
            array[j] = key;
        }
    }
}
console.log(array);
//# sourceMappingURL=insertionSort.js.map