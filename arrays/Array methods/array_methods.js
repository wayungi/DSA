//1.  concat()
// The concat() method is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array. 
// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array5 = [1,2,3,4];
// const array3 = array1.concat(array2);
// const array4 = array5.concat(array2, array1)
// const array6 = array5.concat()

//2.  copyWithin()
// The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length. 
////const array1 = ['a', 'b', 'c', 'd', 'e'];
// => console.log(array1.copyWithin(0, 3, 4)); // Copy to index 0 the element at index 3
// => console.log(array1.copyWithin(1, 3)); // Copy to index 1 all elements from index 3 to the end

// ---------------------------------------------------------------------------------------

//3.  every()
// The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. 
//// const array1 = [1, 30, 39, 29, 10, 13];
// => console.log(array1.every((x) => x < 40))

//---------------------------------------------------------------------------

//4.  filter()

//5. flat()
// The flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. 
//// const arr1 = [0, 1, 2, [3, 4]];
//// const arr2 = [0, 1, 2, [[[3, 4]]]];
// => console.log(arr1.flat())  // => [ 0, 1, 2, 3, 4 ]
// => console.log(arr2.flat(2)) // => [ 0, 1, 2, [ 3, 4 ] ]

//6. flatMap()
// The flatMap() method returns a new array formed by applying a given callback function to each element of the array, and then flattening the result by one level. => map, flat
//// const arr1 = [1, 2, [3], [4, 5], 6, []];
// => console.log(arr1.flatMap(x => x)); // => console.log(arr1.flatMap(x => x*x)); // =>

//7. forEach()
//  The forEach() method executes a provided function once for each array element. 

//-----------------------------------------------------------------------------------------

//8. indexOf()
// The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present. 
//// const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
// => console.log(beasts.indexOf('bison'))

//9. map
// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array. 

//10. reduce()
//The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. 
//// const array1 = [1, 2, 3, 4];
// => console.log( array1.reduce((acc, val) => acc * val, 1));

//11. reduceRight
// The reduceRight() method applies a function against an accumulator and each value of the array (from right-to-left) to reduce it to a single value. 
//// const array1 = [[0, 1], [2, 3], [4, 5]];
// => console.log(array1.reduceRight((accum, val) => accum.concat(val))) // => [4, 5, 2, 3, 0, 1]

//12. reverse()
// The reverse() method reverses an array in place and returns the reference to the same array

// -------------------------------------------------------------------------------------

//13. slice()
// The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included). The original array will not be modified. 
//// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
// => console.log(animals.slice(2)), -ve values start from end of array

//14. some()
// The some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the array, it finds an element for which the provided function returns true;
//// const array = [1, 3, 5];
// => console.log(array.some(x => x%2 === 0))

//15. sort()
// The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted. 

//16. splice()
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. To access part of an array without modifying it, see slice(). 
//// const months = ['Jan', 'March', 'April', 'June'];
// => months.splice(1, 0, 'Feb'); // add element into array
//// console.log(months)
// => console.log(months.splice(0,2)) // remove 2 elements starting fro index 0
//// console.log(months)

//*********************************************** */

//17. entries()
// The entries() method returns a new Array Iterator object that contains the key/value pairs for each index in the array. 
// const array1 = ['a', 'b', 'c'];
// console.log(Object.entries(array1)); //[ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
// const iter = array1.entries()
// console.log(iter.next().value);

//18. fill()
// The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array. 
// const array1 = [1, 2, 3, 4];
// console.log(array1.fill(0,1,3))  

//19. find() // 20. findIndex()
// The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// const array1 = [5, 12, 8, 130, 44];
// console.log(array1.find(x => x/2 === 6))

//21. findLast() ,22. findLastIndex()
// The findLast() method iterates the array in reverse order and returns the value of the first element that satisfies the provided testing function. If no elements satisfy the testing function, undefined is returned. 
// const array1 = [5, 12, 50, 130, 44];
// const found = array1.findLast((element) => element > 45); // works in browser but not in node

// 23. includes()
// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate. 
// const array1 = [1, 2, 3];
// console.log(array1.includes(2));

//24. join()
//The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string
// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join())

// 25. keys(), 26. values(), entries()
// The keys() method returns a new Array Iterator object that contains the keys for each index in the array. => check use at entries()

//27.  toLocaleString()
// The toLocaleString() method returns a string representing the elements of the array. 
// const array1 = [1, 'a', new Date('21 Dec 1997 14:12:00 UTC')];
// const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });
// console.log(array1.toLocaleString());

//pop(), push(), shift(), 31. unshift()




