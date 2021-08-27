const arr = [1, 2, 3, 4, 5];
const searchNo = 4;

function linearSearch() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === searchNo) {
            return i;
        }
    }
}

console.log(linearSearch())