"use strict";
exports.__esModule = true;
exports.ArrayManipulations = void 0;
var ArrayManipulations = /** @class */ (function () {
    function ArrayManipulations() {
    }
    ArrayManipulations.prototype.arrayFindMultiples = function (myArray) {
        var arr = new Array();
        for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
            var i = myArray_1[_i];
            if (typeof i === "number" && (i % 5 == 0 || i % 10 == 0)) {
                arr.push(i);
            }
        }
        return arr;
    };
    ArrayManipulations.prototype.arraySeparate = function (myArray) {
        var arr = new Array();
        for (var _i = 0, myArray_2 = myArray; _i < myArray_2.length; _i++) {
            var i = myArray_2[_i];
            if (typeof i === "string") {
                arr.push(i);
            }
        }
        return arr;
    };
    ArrayManipulations.prototype.arraySplit = function (myString) {
        var arr = new Array();
        var f;
        for (var _i = 0, myString_1 = myString; _i < myString_1.length; _i++) {
            var i = myString_1[_i];
            f = 0;
            if (!isNaN(Number(i))) {
                var n = Number(i);
                for (var j = 2; j < n; j++) {
                    if (n % j == 0) {
                        f = 1;
                    }
                }
                if (f == 0) {
                    arr.push(n);
                }
            }
        }
        return arr;
    };
    ArrayManipulations.prototype.arraySort = function (myArray) {
        return myArray.sort(function (a, b) { return a.localeCompare(b); });
    };
    ArrayManipulations.prototype.arrayReplace = function (myArray) {
        for (var i in myArray) {
            if (myArray[i] % 3 == 0) {
                myArray[i] = 5;
            }
        }
        return myArray;
    };
    return ArrayManipulations;
}());
exports.ArrayManipulations = ArrayManipulations;
var myArray = [34, 45, "hello", 60, "hi", 23, "apple", "13", 17, 25, 70, "mango"];
var array = new ArrayManipulations();
console.log(array.arrayFindMultiples(myArray));
console.log(array.arraySeparate(myArray));
console.log(array.arraySplit(["31", "25", "hello", "40", "67", "100", "hi"]));
console.log(array.arraySort(["31", "25", "hello", "40", "67", "100", "hi"]));
console.log(array.arrayReplace([8, 2, 66, 38, 19, 21, 84, 96]));
