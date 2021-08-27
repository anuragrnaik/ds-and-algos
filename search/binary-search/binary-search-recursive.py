import math

arr = [1, 2, 3, 4, 5]
searchNo = 5

def binary_search(arr, searchNo, low, high):
    if low > high:
        return -1

    mid = math.floor((low + high) / 2)

    if arr[mid] == searchNo:
        return mid

    if arr[mid] < searchNo:
        low = mid + 1
        return binary_search(arr, searchNo, low, high)
    else:
        high = mid - 1
        return binary_search(arr, searchNo, low, high)

print(binary_search(arr, searchNo, 0, len(arr) - 1))