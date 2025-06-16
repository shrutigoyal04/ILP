function differenceFrom13(num) {
    if (num > 13) {
        return 2 * Math.abs(num - 13);
    } else {
        return Math.abs(num - 13);
    }
}

console.log(differenceFrom13(10)); 
console.log(differenceFrom13(20));  
