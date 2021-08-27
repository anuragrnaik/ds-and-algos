## Linear Search
<hr/>
Simplest of all the searches, Linear Search can be used to search an item from a collection of items, i.e. a list. Linear Search depends on traversing through the list one item at a time and comparing with the search item.

For e.g., consider an array of integers with length N. To find the position of an item, say *'x'*, we'll loop through the array and on match return the iteration number

### Implementation Pseudocode:
```javascript
 for (start to end of array) {
    if (current_item matches search_item) return current_index
 }
 return -1 // not-found
```

### Time Complexity:
Best Case: O(1) Element present at the first index

Worst Case: O(n) Element present at the last index