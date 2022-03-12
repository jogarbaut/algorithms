// Arrays To Do 1
// Jomel Bautista

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.

function pushFront([arr], num) {
    var newArr = new Array(arr.length + 1);
    for (var i=0; i < arr.length; i++) {
        if (i=0) {
            newArr[i] = num;
        } else {
            newArr[i] = arr[(i + 1)];
        }
    }
    return newArr;
}

console.log(pushFront([1]), 1);

arr = [1,2];
console.log(arr.length);