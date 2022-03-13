// Arrays To Do 1
// Jomel Bautista

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. Do this without using any built-in array methods.
function pushFront(arr, val) {
    var temp1 = arr[0], temp2 = arr[1];
    for (var i = 0; i < arr.length && temp1 != undefined; i++) {
        arr[i + 1] = temp1;
        temp1 = temp2;
        temp2 = arr[i + 2];
    }
    arr[0] = val;
    return arr
}
// Problem 1 test
testArr = [1, 2, 3];
val = 0;
console.log(pushFront(testArr, val)); // Output = [ 0, 1, 2, 3 ]

// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Do this without using any built-in array methods except pop().
function popFront(arr) {
    var frontVal = arr[0];
    for (var i = 1; i < arr.length; i++) {
        arr[0] = arr[i];
    }
    arr.pop();
    return frontVal;
}
// Problem 2 test
testArr = [1, 2, 3];
console.log(popFront(testArr)); // Output = 1

// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. Do this without using built-in array methods. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

function insertAt(arr, ind, val) {
    for (var i = arr.length - 1; i >= ind; i--) {
        arr[i + 1] = arr[i];
    }
    arr[ind] = val;
    return arr;
}

// Problem 3 test
testArr = [1, 2, 3];
ind = 1;
val = 5;
console.log(insertAt(testArr, ind, val)); // Output = [ 1, 5, 2, 3]