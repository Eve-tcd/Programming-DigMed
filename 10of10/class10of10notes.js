

let m = [[0,1,2,3],[2,3,4,5],[3,4,5,6]];
console.log(m[0][2]); 
/* the first [] refers to which array within the array, 
while the second [] refers to the index within the chose array */

let arr = [1,2,3];
let copy = [...arr];
arr.push(4);
/*this copied the original array, which equal [1,2,3]
whereas the arr was push 4, which added a 4 to the original
array, not changing the copy */

let arr = [1,2,[3,4]];
let copy = [...arr];
arr[2][0]=4;
/* as this changes a number, and doesn't add or subtract
both the copy and the original changes, as this cause add to the array*/

