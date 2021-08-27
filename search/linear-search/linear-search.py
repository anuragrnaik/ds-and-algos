arr = [1, 2, 3, 4, 5]
searchNo = 4

def linear_search():
    for i,no in enumerate(arr):
        if no == searchNo:
            return i

print(linear_search())
