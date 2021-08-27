## Binary Search
<hr />
One of the most popular search algorithms, it uses a divide and conquer approach to acheive efficiency and quicker searching.


For e.g., consider an array of integers with length N. To find the position of an item, say *'x'*, we'll loop through the array and on match return the iteration number

### Implementation Pseudocode:
1. Iterative
    ```javascript
        // start low = 0 and high = array length - 1
        while (low is less than or equal to high)
        {
            mid = floor of (low + high) / 2;
            if (a[mid] < key)
            {
                low = mid + 1
            }
            else if (a[mid] > key)
            {
                high = mid - 1
            }
            else
            {
                return mid
            }
        }
        return -1;                // not found
    ```

2. Recursive

    ```javascript
    search(arr, searchItem, low, high) {
        if (low greater than high) return -1

        mid = floor of ((low + high) / 2)

        if (arr[mid] matches searchItem) return mid

        if (arr[mid] greater than searchItem) {
            low = mid + 1
            search(arr, searchItem, low, high)
        } else {
            high = mid - 1
            search(arr, searchItem, low, high)
        }
    }
    ```


### Time Complexity:
Best Case: O(1) Element present at median

Worst Case: O(log n)