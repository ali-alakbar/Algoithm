function BinSearch(arr, arrLength, key) {
    var l = 1;
    var h = arrLength;
    while (l <= h) {
        var mid = Math.floor((l + h) / 2);
        if (arr[mid] === key) {
            return "".concat(mid, " is found in the list.");
        }
        else {
            if (arr[mid] > key) {
                l = mid + 1;
            }
            else {
                h = mid - 1;
            }
        }
    }
}
var my_array = [1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
var my_length = my_array.length;
console.log(BinSearch(my_array, my_length, 3));
