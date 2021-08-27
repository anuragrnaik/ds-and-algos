const arr = [1, 2, 3, 4, 5];
const searchNo = 5;

function binarySearch(arr, x, low, high) {

    // Base Condition
    if (low > high) return -1;

    // Find the middle index
    let mid = Math.floor((low + high) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return mid;

    // If element at mid is greater than x,
    // search in the left half of mid
    if(arr[mid] > x) {
        return binarySearch(arr, x, low, mid - 1);
    } else {

        // If element at mid is smaller than x,
        // search in the right half of mid
        return binarySearch(arr, x, mid + 1, high);
    }
}

console.log(binarySearch(arr, searchNo, 0, arr.length));