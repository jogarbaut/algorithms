// Arrays To Do 2
// Jomel Bautista

// 1. Reverse
// Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array – move values within the array that you are given. As always, do not use built-in array functions such as splice().
function reverse(arr) {
    for (var i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp1 = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp1;
    }
    return arr;
}
// Problem 1 test
testArr1 = [0, 1, 2, 3, 4]; 
testArr2 = [24, 25, 26, 27]; 
console.log(reverse(testArr1)); // Output = [ 4, 3, 2, 1, 0]
console.log(reverse(testArr2)); // Output = [ 27, 26, 25, 24]

// 2. Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
// Second: allow negative shiftBy (shift L, not R).
// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
// Fourth: minimize the touches of each element.
function rotate(arr, shiftBy) {
    var moves = 0;
    if (shiftBy > 0) {
        moves = shiftBy % arr.length;
    } else {
        moves = Math.abs(shiftBy) % arr.length;
    }
    if (shiftBy > 0) {
        for (var i = 0; i < moves; i++) {
            var temp = arr[arr.length - 1];
            for (var j = arr.length - 2; j >= 0; j--) {
                arr[j + 1] = arr[j];
            }
            arr[0] = temp;
        }
    } else {
        for (var i = 0; i < moves; i++) {
            var temp = arr[0]
            for (var j = 1; j < arr.length; j++) {
                arr[j - 1] = arr[j];
            }
            arr[arr.length - 1] = temp;
        }
    }
    return arr;
}
// Problem 2 test
testArr = [0, 1, 2, 3, 4];
testShiftBy = -1;
console.log(rotate(testArr, testShiftBy)); // Output = [ 1, 2, 3, 4, 0 ]

testArr = [0, 1, 2, 3, 4];
testShiftBy = 2;
console.log(rotate(testArr, testShiftBy)); // Output = [ 3, 4, 0, 1, 2 ]

// 3. Filter Range
// Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.
function filterRange(arr, min, max) {
    var valBetweenRangeInd = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= min && arr[i] <= max) {
            arr[valBetweenRangeInd] = arr[i];
            valBetweenRangeInd++;
        }
    }
    arr.length = valBetweenRangeInd;
    return arr;
}
// Problem 3 test
testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
min = 2;
max = 4;
console.log(filterRange(testArr, min, max)); // Output = [2, 3, 4]

// 4. Concat
// Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array ocntaining the first array's elements, followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat(['a','b'], [1,2]) should return new array ['a','b',1,2].
function arrConcat(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < (arr1.length + arr2.length); i++) {
        if (i < arr1.length) {
            newArr[i] = arr1[i];
        } else {
            newArr[i] = arr2[i - arr1.length];
        }
    }
    return newArr;
}
// Problem 4 test
testArr1 = ['a', 'b'];
testArr2 = [1, 2];
console.log(arrConcat(testArr1, testArr2)); // Output = [ 'a', 'b', 1, 2 ]